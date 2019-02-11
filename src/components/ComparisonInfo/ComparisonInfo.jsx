import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import './ComparisonInfo.scss';
import ComparisonButton from '../ComparisonButton';
import { entry as entryType } from '../../types';

export default function ComparisonInfo({
  comparisonEntry,
  onClearButtonClick,
  onCompareButtonClick,
  rotateIcon,
}) {
  return (
    <div className="ComparisonInfo">
      <ComparisonButton rotateIcon={rotateIcon} onClick={onCompareButtonClick} />
      {comparisonEntry && (
        <Fragment>
          <div className="ComparisonInfo__entry fadeIn">
            #
            {comparisonEntry.carNumber}
            {' '}
&ndash;
            {' '}
            {comparisonEntry.manufacturer}
          </div>
          <button
            className="button ComparisonInfo__clearButton fadeIn"
            type="button"
            onClick={onClearButtonClick}
          >
            <span
              className="fas fa-times ComparisonInfo__clearButtonIcon"
              aria-hidden="true"
            />
            Clear
          </button>
        </Fragment>
      )}
    </div>
  );
}

ComparisonInfo.propTypes = {
  comparisonEntry: entryType,
  onClearButtonClick: PropTypes.func.isRequired,
  onCompareButtonClick: PropTypes.func.isRequired,
  rotateIcon: PropTypes.bool.isRequired,
};

ComparisonInfo.defaultProps = {
  comparisonEntry: null,
};
