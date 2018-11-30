import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import StintTable from '../../components/StintTable';
import { getStatisticsLoading, getStints, getIsMobile } from '../../reducers';
import { fetchStints as fetchStintsAction } from '../../actions/statistics';

export class StintData extends React.Component {
  componentDidMount() {
    const {
      entryId, fetchStints, loading, stints,
    } = this.props;
    if (!stints && !loading) {
      fetchStints(entryId);
    }
  }

  render() {
    const { isMobile, stints } = this.props;
    if (!stints) {
      return null;
    }

    return <StintTable stints={stints} isMobile={isMobile} />;
  }
}

StintData.propTypes = {
  entryId: PropTypes.string.isRequired,
  fetchStints: PropTypes.func.isRequired,
  stints: PropTypes.oneOfType([
    PropTypes.exact(null),
    PropTypes.arrayOf(
      PropTypes.shape({
        fastestLapTime: PropTypes.number,
        averageLapTime: PropTypes.number,
        driverName: PropTypes.string,
        stintStart: PropTypes.number,
        stintEnd: PropTypes.number,
      }),
    ),
  ]),
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
    stints: getStints(state)(entryId),
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
