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
    const {
      fetchRaces, fetchRaceEntries, match, races,
    } = this.props;
    const { id: raceId } = match.params;
    if (!(raceId in races)) {
      fetchRaces();
    } else {
      const uri = races[raceId].links.entries;
      fetchRaceEntries(uri);
    }
  }

  componentDidUpdate(prevProps) {
    const { fetchRaceEntries, match, races } = this.props;
    if (prevProps.races !== races) {
      const { id: raceId } = match.params;
      const uri = races[raceId].links.entries;
      fetchRaceEntries(uri);
    }
  }

  render() {
    const { entries, isLoading } = this.props;
    if (isLoading) {
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
    params: PropTypes.shape({ id: PropTypes.string }).isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  entries: getRaceEntries(state),
  races: getRaces(state),
  isLoading: getLoading(state),
});

const mapDispatchToProps = {
  fetchRaces: fetchRacesAction,
  fetchRaceEntries: fetchRaceEntriesAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EntryList);
