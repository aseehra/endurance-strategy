import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import EntryTable from '../../components/EntryTable';
import { getStatistics } from '../../reducers';
import { fetchStatistics as fetchStatisticsAction } from '../../actions/statistics';

class EntryDetails extends React.Component {
  componentDidMount() {
    const { entryId, fetchStatistics, statistics } = this.props;
    if (!statistics) {
      fetchStatistics(entryId);
    }
  }

  render() {
    const { statistics } = this.props;
    if (!statistics) {
      return null;
    }
    return (
      <div className="EntryDetails">
        <EntryTable {...statistics} />
      </div>
    );
  }
}

EntryDetails.propTypes = {
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
  };
};

const mapDispatchToProps = {
  fetchStatistics: fetchStatisticsAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EntryDetails);
