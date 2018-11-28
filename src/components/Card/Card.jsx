import React from 'react';
import PropTypes from 'prop-types';

import './Card.scss';

export default function Card(props) {
  const { children, className } = props;
  return <div className={`Card ${className}`}>{children}</div>;
}

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Card.defaultProps = {
  children: null,
  className: '',
};
