import PropTypes from 'prop-types';
import React from 'react';

import './PageBanner.scss';

export default function PageBanner(props) {
  const { title } = props;
  return (
    <header className="PageBanner">
      <h1 className="PageBanner__title h3">{title}</h1>
    </header>
  );
}

PageBanner.propTypes = {
  title: PropTypes.string,
};

PageBanner.defaultProps = {
  title: 'Endurance Strategy Reporter',
};
