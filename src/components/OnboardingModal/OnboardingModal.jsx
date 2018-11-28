import PropTypes from 'prop-types';
import React from 'react';

import './OnboardingModal.scss';
import Card from '../Card';

export default function OnboardingModal(props) {
  const { children, onDismiss } = props;
  return (
    <section className="OnboardingModal">
      <Card className="OnBoardingModal__card">
        {children}
        <button
          type="button"
          className="OnBoardingModal__button"
          onClick={() => onDismiss()}
        >
          Continue
        </button>
      </Card>
    </section>
  );
}

OnboardingModal.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
  onDismiss: PropTypes.func.isRequired,
};

OnboardingModal.defaultProps = {
  children: [],
};
