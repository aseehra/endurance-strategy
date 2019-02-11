import PropTypes from 'prop-types';
import React from 'react';

import './TwoColumnGrid.scss';

export default function TwoCardColumns({ children }) {
  return <div className="TwoColumnGrid">{children}</div>;
}

TwoCardColumns.propTypes = {
  children: PropTypes.node.isRequired,
};
