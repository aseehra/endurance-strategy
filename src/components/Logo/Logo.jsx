import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import './Logo.scss';

export default function Logo(props) {
  const { className } = props;
  return (
    <Link to="/races" className={`unadorned-link ${className}`}>
      <div className="Logo">ESR</div>
    </Link>
  );
}

Logo.propTypes = {
  className: PropTypes.string,
};

Logo.defaultProps = {
  className: '',
};
