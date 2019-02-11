import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import ComparisonInfo from '../../components/ComparisonInfo';
import ComparisonModal from '../ComparisonModal';
import DriverComparsionTable from '../../components/DriverComparisonTable';
import EntryTable from '../../components/EntryTable';
import PitStopTable from '../../components/PitStopTable';
import StintData from '../StintData';
import TwoColumnGrid from '../../components/TwoColumnGrid';
import { getRaceEntries, getStatistics, getStatisticsError } from '../../reducers';
import { fetchStatistics as fetchStatisticsAction } from '../../actions/statistics';
import { entry as entryType } from '../../types';

export class EntryDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showComparisonModal: false, comparisonId: null };

    this.onComparisonButtonClick = this.onComparisonButtonClick.bind(this);
    this.onComparison = this.onComparison.bind(this);
    this.clearComparison = this.clearComparison.bind(this);
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

  onComparison(entryId) {
    const { fetchStatistics, statistics } = this.props;

    Promise.resolve(statistics[entryId] || fetchStatistics(entryId)).then(() => {
      this.setState({
        showComparisonModal: false,
        comparisonId: entryId,
      });
    });
  }

  clearComparison() {
    this.setState({
      comparisonId: null,
    });
  }

  render() {
    const {
      entryId, error, raceId, statistics, entries,
    } = this.props;
    const { showComparisonModal, comparisonId } = this.state;

    if (error) {
      return <Redirect to="/404" />;
    }

    if (!statistics || !statistics[entryId]) {
      return null;
    }

    const primaryStatistics = statistics[entryId];
    const secondaryStatistics = statistics[comparisonId];

    return (
      <div className="EntryDetails">
        <TwoColumnGrid>
          <ComparisonInfo
            onCompareButtonClick={this.onComparisonButtonClick}
            onClearButtonClick={this.clearComparison}
            comparisonEntry={comparisonId && entries[comparisonId]}
            rotateIcon={showComparisonModal}
          />
          {showComparisonModal && (
            <ComparisonModal raceId={raceId} onComparison={this.onComparison} />
          )}
          <EntryTable
            primaryStatistics={primaryStatistics}
            secondaryStatistics={secondaryStatistics}
          />
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
  entries: PropTypes.objectOf(entryType),
  error: PropTypes.instanceOf(Error),
};

EntryDetails.defaultProps = {
  statistics: null,
  error: null,
  entries: null,
};

const mapStateToProps = (state, ownProps) => {
  const { raceId, entryId } = ownProps.match.params;
  return {
    raceId,
    entryId,
    entries: getRaceEntries(state),
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
