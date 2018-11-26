import pathToRegexp from 'path-to-regexp';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import TitleBlock from '../../components/TitleBlock';
import { fetchRaceEntries as fetchRaceEntriesAction } from '../../actions/races';
import { getRace, getRaceEntries, getEntriesLoading } from '../../reducers';

class PageTitle extends React.Component {
  componentDidMount() {
    const {
      entries, entryId, entriesLoading, fetchRaceEntries, raceId,
    } = this.props;
    if (entryId !== null && !entries && !entriesLoading) {
      fetchRaceEntries(raceId);
    }
  }

  render() {
    const { race } = this.props;
    const title = race
      ? `${race.name} – ${race.location}`
      : 'Endurance Strategy Reporter';
    return <TitleBlock title={title} />;
  }
}

PageTitle.propTypes = {
  race: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }),
  entryId: PropTypes.number,
  entriesLoading: PropTypes.bool,
  raceId: PropTypes.string,
  fetchRaceEntries: PropTypes.func.isRequired,
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      carClass: PropTypes.string.isRequired,
      carNumber: PropTypes.number.isRequired,
      manufacturer: PropTypes.string.isRequired,
    }),
  ),
};

PageTitle.defaultProps = {
  race: null,
  entryId: null,
  raceId: null,
  entries: null,
  entriesLoading: false,
};

const mapDispatchToProps = {
  fetchRaceEntries: fetchRaceEntriesAction,
};

const mapStateToProps = (state, ownProps) => {
  const { pathname } = ownProps.location;
  const raceRE = pathToRegexp('/race/:raceId', { end: false });
  const entryRE = pathToRegexp('/race/:raceId/entry/:entryId', { end: false });
  const parsedRace = raceRE.exec(pathname);
  const parsedEntry = entryRE.exec(pathname);

  const raceId = parsedRace ? parsedRace[1] : null;
  if (!raceId) {
    return {};
  }

  const entryId = parsedEntry ? parseInt(parsedEntry[2], 10) : null;
  const entries = getRaceEntries(state)[raceId];

  return {
    race: getRace(state)(raceId),
    raceId,
    entryId,
    entries,
    entriesLoading: getEntriesLoading(state),
  };
};

const ConnectedTitleBanner = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PageTitle);
export default withRouter(ConnectedTitleBanner);
