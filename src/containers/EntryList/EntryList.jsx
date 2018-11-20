import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import RaceEntry from '../../components/RaceEntry/RaceEntry';
import {
  fetchRaces as fetchRacesAction,
  fetchRaceEntries as fetchRaceEntriesAction,
} from '../../actions/races';
import { getLoading, getRaces, getRaceEntries } from '../../reducers';

class EntryList extends React.Component {
  componentDidMount() {
    const { entries, fetchRaceEntries, race } = this.props;

    if (!entries && race) {
      const uri = race.links.entries;
      fetchRaceEntries(uri);
    }
  }

  componentDidUpdate(prevProps) {
    const { entries, fetchRaceEntries, race } = this.props;

    if (prevProps.race !== race) {
      if (!entries) {
        const uri = race.links.entries;
        fetchRaceEntries(uri);
      }
    }
  }

  render() {
    const { entries, isLoading } = this.props;
    if (isLoading || !entries) {
      // TODO: loading spinner
      return null;
    }

    const entryComponents = entries.map(entry => (
      <RaceEntry key={entry.id} {...entry} />
    ));
    return <div className="EntryList">{entryComponents}</div>;
  }
}

EntryList.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ raceId: PropTypes.string }).isRequired,
  }).isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const { raceId } = ownProps.match.params;

  return {
    entries: getRaceEntries(state)[raceId],
    race: getRaces(state)[raceId],
    isLoading: getLoading(state),
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
