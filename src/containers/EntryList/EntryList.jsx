import PropTypes from 'prop-types';
import queryString from 'query-string';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './EntryList.scss';
import RaceEntry from '../../components/RaceEntry/RaceEntry';
import {
  fetchRaces as fetchRacesAction,
  fetchRaceEntries as fetchRaceEntriesAction,
  updateRaceEntryFilter,
} from '../../actions/races';
import {
  getEntriesLoading,
  getRaceEntries,
  getRaceEntriesError,
  getRaceEntriesFilter,
} from '../../reducers';

export class EntryList extends React.Component {
  componentDidMount() {
    const {
      isLoading,
      fetchRaceEntries,
      raceId,
      urlQuery,
      setSearchFilter,
    } = this.props;
    if (!isLoading) {
      fetchRaceEntries(raceId);
    }

    const queryParams = queryString.parse(urlQuery);
    setSearchFilter(queryParams.search || '');
  }

  componentDidUpdate(prevProps) {
    const { urlQuery, setSearchFilter } = this.props;
    const { urlQuery: prevUrlQuery } = prevProps;

    if (urlQuery !== prevUrlQuery) {
      setSearchFilter(queryString.parse(urlQuery).search || '');
    }
  }

  componentWillUnmount() {
    const { setSearchFilter } = this.props;
    setSearchFilter('');
  }

  render() {
    const {
      entries, entryFilter, error, isLoading, raceId,
    } = this.props;

    if (error) {
      return <Redirect to="/404" />;
    }

    if (isLoading || !entries) {
      return null;
    }

    const entryFilterNormalized = entryFilter.toLowerCase();
    const entryComponents = Object.values(entries)
      .filter(
        entry => entry.manufacturer.toLowerCase().includes(entryFilterNormalized)
          || entry.driverName.toLowerCase().includes(entryFilterNormalized)
          || entry.carNumber.toString().includes(entryFilterNormalized),
      )
      .sort((entryA, entryB) => entryA.positionOverall - entryB.positionOverall)
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
  setSearchFilter: PropTypes.func.isRequired,
  urlQuery: PropTypes.string,
  error: PropTypes.instanceOf(Error),
};

EntryList.defaultProps = {
  entries: null,
  urlQuery: '',
  error: null,
};

const mapStateToProps = (state, ownProps) => {
  const { raceId } = ownProps.match.params;
  const { search } = ownProps.location;

  return {
    raceId,
    entries: getRaceEntries(state),
    isLoading: getEntriesLoading(state),
    entryFilter: getRaceEntriesFilter(state),
    urlQuery: search,
    error: getRaceEntriesError(state),
  };
};

const mapDispatchToProps = {
  fetchRaces: fetchRacesAction,
  fetchRaceEntries: fetchRaceEntriesAction,
  setSearchFilter: updateRaceEntryFilter,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EntryList);
