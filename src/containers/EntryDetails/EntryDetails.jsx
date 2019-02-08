import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import ComparisonButton from '../../components/ComparisonButton';
import ComparisonModal from '../ComparisonModal';
import DriverComparsionTable from '../../components/DriverComparisonTable';
import EntryTable from '../../components/EntryTable';
import PitStopTable from '../../components/PitStopTable';
import StintData from '../StintData';
import TwoColumnGrid from '../../components/TwoColumnGrid';
import { getStatistics, getStatisticsError } from '../../reducers';
import { fetchStatistics as fetchStatisticsAction } from '../../actions/statistics';

export class EntryDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showComparisonModal: false };

    this.onComparisonButtonClick = this.onComparisonButtonClick.bind(this);
  }

  componentDidMount() {
    const { entryId, fetchStatistics, statistics } = this.props;

    if (!statistics[entryId]) {
      fetchStatistics(entryId);
    }
  }

  onComparisonButtonClick() {
    const { showComparisonModal } = this.state;
    this.setState({ showComparisonModal: !showComparisonModal });
  }

  render() {
    const {
      entryId, error, raceId, statistics,
    } = this.props;
    const { showComparisonModal } = this.state;

    if (error) {
      return <Redirect to="/404" />;
    }

    if (!statistics || !statistics[entryId]) {
      return null;
    }

    const primaryStatistics = statistics[entryId];

    return (
      <div className="EntryDetails">
        <TwoColumnGrid>
          <ComparisonButton
            rotateIcon={showComparisonModal}
            onClick={this.onComparisonButtonClick}
          />
          {showComparisonModal && <ComparisonModal raceId={raceId} />}
          <EntryTable {...primaryStatistics} />
          <DriverComparsionTable {...primaryStatistics} />
          <PitStopTable {...primaryStatistics} />
          <StintData entryId={entryId} />
        </TwoColumnGrid>
      </div>
    );
  }
}

EntryDetails.propTypes = {
  raceId: PropTypes.string.isRequired,
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
  error: PropTypes.instanceOf(Error),
};

EntryDetails.defaultProps = {
  statistics: null,
  error: null,
};

const mapStateToProps = (state, ownProps) => {
  const { raceId, entryId } = ownProps.match.params;
  return {
    raceId,
    entryId,
    statistics: getStatistics(state),
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
