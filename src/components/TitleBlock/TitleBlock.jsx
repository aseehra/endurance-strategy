import PropTypes from 'prop-types';
import React from 'react';

import './TitleBlock.scss';

export default function TitleBlock(props) {
  const { entryTitle, mainTitle } = props;
  let entryBlock;

  if (entryTitle) {
    /* eslint-disable max-len */
    entryBlock = (
      <h2 className="TitleBlock__banner TitleBlock__banner--normal TitleBlock__banner--entry">
        {entryTitle}
      </h2>
    );
    /* eslint-disable max-len */
  }

  return (
    <header role="banner" className="TitleBlock">
      <h1
        className={`TitleBlock__banner TitleBlock__banner--race ${
          entryTitle ? 'TitleBlock__banner--small' : 'TitleBlock__banner--normal'
        }`}
      >
        {mainTitle}
      </h1>
      {entryBlock}
    </header>
  );
}

TitleBlock.propTypes = {
  mainTitle: PropTypes.string.isRequired,
  entryTitle: PropTypes.string,
};

TitleBlock.defaultProps = {
  entryTitle: '',
};
