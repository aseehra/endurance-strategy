import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import './ComparisonButton.scss';

export default function ComparisonButton({ rotateIcon, onClick }) {
  return (
    <button type="button" onClick={onClick} className="button ComparisonButton">
      <span
        className={classNames('fas', 'fa-bars', 'ComparisonButton__icon', {
          'ComparisonButton__icon--rotated': rotateIcon,
        })}
        aria-hidden="true"
      />
      Compare with…
    </button>
  );
}

ComparisonButton.propTypes = {
  onClick: PropTypes.func,
  rotateIcon: PropTypes.bool,
};

ComparisonButton.defaultProps = {
  onClick: () => false,
  rotateIcon: false,
};
