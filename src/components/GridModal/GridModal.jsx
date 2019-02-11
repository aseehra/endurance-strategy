import PropTypes from 'prop-types';
import React from 'react';

import './GridModal.scss';
import Card from '../Card';

export default function GridModal({ children }) {
  return <Card className="GridModal fadeIn">{children}</Card>;
}

GridModal.propTypes = {
  children: PropTypes.node.isRequired,
};
