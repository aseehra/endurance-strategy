import React from 'react';
import PropTypes from 'prop-types';

import './Card.scss';

export default function Card(props) {
  const { children } = props;
  return <div className="Card">{children}</div>;
}

Card.propTypes = {
  children: PropTypes.node,
};

Card.defaultProps = {
  children: null,
};
