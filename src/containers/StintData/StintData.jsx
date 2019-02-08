import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import StintTable from '../../components/StintTable';
import { getStatisticsLoading, getStints, getIsMobile } from '../../reducers';
import { fetchStints as fetchStintsAction } from '../../actions/statistics';

export class StintData extends React.Component {
  componentDidMount() {
    const { entryId, fetchStints, loading } = this.props;
    if (!loading) {
      fetchStints(entryId);
    }
  }

  render() {
    const { entryId, isMobile, stints } = this.props;
    if (!stints[entryId]) {
      return null;
    }

    return <StintTable stints={stints[entryId]} isMobile={isMobile} />;
  }
}

StintData.propTypes = {
  entryId: PropTypes.string.isRequired,
  fetchStints: PropTypes.func.isRequired,
  stints: PropTypes.objectOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        fastestLapTime: PropTypes.number,
        averageLapTime: PropTypes.number,
        driverName: PropTypes.string,
        stintStart: PropTypes.number,
        stintEnd: PropTypes.number,
      }),
    ),
  ),
  loading: PropTypes.bool,
  isMobile: PropTypes.bool.isRequired,
};

StintData.defaultProps = {
  stints: null,
  loading: false,
};

const mapStateToProps = (state, ownProps) => {
  const { entryId } = ownProps;

  return {
    entryId,
    stints: getStints(state),
    loading: getStatisticsLoading(state)(entryId),
    isMobile: getIsMobile(state),
  };
};

const mapDispatchToProps = {
  fetchStints: fetchStintsAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StintData);
