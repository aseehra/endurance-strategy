import PropTypes from 'prop-types';
import React from 'react';

import './TitleBlock.scss';

export default function TitleBlock(props) {
  const { entryTitle, mainTitle } = props;
  let entryBlock;
  if (entryTitle) {
    entryBlock = <h2 className="TitleBlock__entry">{entryTitle}</h2>;
  }

  return (
    <header className="TitleBlock">
      <h1
        className={`TitleBlock__main ${entryTitle ? '.TitleBlock__main--small' : ''}`}
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
