import React from 'react';
import { connect } from 'react-redux';

import RaceEntry from '../../components/RaceEntry/RaceEntry';
import {
  fetchRaces as fetchRacesAction,
  fetchRaceEntries as fetchRaceEntriesAction,
} from '../../actions/races';
import { getEntriesLoading, getRaceEntries } from '../../reducers';

class EntryList extends React.Component {
  componentDidMount() {
    const { entries, fetchRaceEntries, raceId } = this.props;
    if (!entries) {
      fetchRaceEntries(raceId);
    }
  }

  render() {
    const { entries, isLoading, raceId } = this.props;
    if (isLoading || !entries) {
      // TODO: loading spinner
      return null;
    }

    const entryComponents = entries.map(entry => (
      <RaceEntry key={entry.id} {...entry} raceId={raceId} />
    ));
    return <div className="EntryList">{entryComponents}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  const { raceId } = ownProps.match.params;

  return {
    raceId,
    entries: getRaceEntries(state)[raceId],
    isLoading: getEntriesLoading(state),
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
