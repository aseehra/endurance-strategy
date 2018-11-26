import PropTypes from 'prop-types';
import React from 'react';

import './TitleBlock.scss';

export default function TitleBlock(props) {
  const { title } = props;
  return (
    <header className="PageBanner">
      <h1 className="PageBanner__title h3">{title}</h1>
    </header>
  );
}

TitleBlock.propTypes = {
  title: PropTypes.string,
};

TitleBlock.defaultProps = {
  title: 'Endurance Strategy Reporter',
};
