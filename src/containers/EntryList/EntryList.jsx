import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import RaceEntry from '../../components/RaceEntry/RaceEntry';
import {
  fetchRaces as fetchRacesAction,
  fetchRaceEntries as fetchRaceEntriesAction,
} from '../../actions/races';
import {
  getEntriesLoading,
  getRaceEntries,
  getRaceEntriesFilter,
} from '../../reducers';

class EntryList extends React.Component {
  componentDidMount() {
    const { entries, fetchRaceEntries, raceId } = this.props;
    if (!entries) {
      fetchRaceEntries(raceId);
    }
  }

  render() {
    const {
      entries, entryFilter, isLoading, raceId,
    } = this.props;
    if (isLoading || !entries) {
      // TODO: loading spinner
      return null;
    }

    const entryFilterNormalized = entryFilter.toLowerCase();
    const entryComponents = Object.values(entries)
      .filter(
        entry => entry.manufacturer.toLowerCase().includes(entryFilterNormalized)
          || entry.driverName.toLowerCase().includes(entryFilterNormalized)
          || entry.carNumber.toString().includes(entryFilterNormalized),
      )
      .sort((entryA, entryB) => entryA.carNumber - entryB.carNumber)
      .map(entry => <RaceEntry key={entry.id} {...entry} raceId={raceId} />);
    return <div className="EntryList">{entryComponents}</div>;
  }
}

EntryList.propTypes = {
  raceId: PropTypes.string.isRequired,
  entries: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      manufacturer: PropTypes.string.isRequired,
      driverName: PropTypes.string.isRequired,
      carNumber: PropTypes.number.isRequired,
    }),
  ),
  isLoading: PropTypes.bool.isRequired,
  entryFilter: PropTypes.string.isRequired,
};

EntryList.defaultProps = {
  entries: null,
};

const mapStateToProps = (state, ownProps) => {
  const { raceId } = ownProps.match.params;

  return {
    raceId,
    entries: getRaceEntries(state)[raceId],
    isLoading: getEntriesLoading(state),
    entryFilter: getRaceEntriesFilter(state),
  };
};

const mapDispatchToProps = {
  fetchRaces: fetchRacesAction,
  fetchRaceEntries: fetchRaceEntriesAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EntryList);
