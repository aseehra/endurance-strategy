import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import './EntryDetails.scss';
import DriverComparsionTable from '../../components/DriverComparisonTable';
import EntryTable from '../../components/EntryTable';
import PitStopTable from '../../components/PitStopTable';
import StintData from '../StintData';
import { getStatistics, getStatisticsError } from '../../reducers';
import { fetchStatistics as fetchStatisticsAction } from '../../actions/statistics';

class EntryDetails extends React.Component {
  componentDidMount() {
    const { entryId, fetchStatistics, statistics } = this.props;

    if (!statistics) {
      fetchStatistics(entryId);
    }
  }

  render() {
    const { entryId, error, statistics } = this.props;
    if (error) {
      // TODO: real error handling
      return error.message;
    }

    if (!statistics) {
      return null;
    }
    return (
      <div className="EntryDetails">
        <EntryTable {...statistics} />
        <DriverComparsionTable {...statistics} />
        <PitStopTable {...statistics} />
        <StintData entryId={entryId} />
      </div>
    );
  }
}

EntryDetails.propTypes = {
  entryId: PropTypes.string.isRequired,
  fetchStatistics: PropTypes.func.isRequired,
  statistics: PropTypes.shape({
    averageLapTime: PropTypes.number,
    fastestLap: PropTypes.shape({
      lapNumber: PropTypes.number,
      lapTime: PropTypes.number,
      driverName: PropTypes.string,
    }),
  }),
};

EntryDetails.defaultProps = {
  statistics: null,
};

const mapStateToProps = (state, ownProps) => {
  const { entryId } = ownProps.match.params;
  return {
    entryId,
    statistics: getStatistics(state)(entryId),
    error: getStatisticsError(state),
  };
};

const mapDispatchToProps = {
  fetchStatistics: fetchStatisticsAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EntryDetails);
