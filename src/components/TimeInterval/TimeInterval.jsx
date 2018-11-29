import PropTypes from 'prop-types';
import React from 'react';

export default function TimeInterval(props) {
  const { className, time } = props;
  const mins = Math.floor(time / 60);
  const seconds = (time % 60).toFixed(3).padStart(6, '0');

  return <span className={className}>{`${mins}:${seconds}`}</span>;
}

TimeInterval.propTypes = {
  time: PropTypes.number.isRequired,
  className: PropTypes.string,
};

TimeInterval.defaultProps = {
  className: null,
};
