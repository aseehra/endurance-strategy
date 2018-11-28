import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import OnboardingModal from '../../components/OnboardingModal';
import { setMainOnboardingSeen } from '../../actions/ux';

function MainOnboarding(props) {
  const { setOnboardingSeen } = props;
  return (
    <OnboardingModal onDismiss={() => setOnboardingSeen(true)}>
      <p>Endurance Strategy Reporter provides analysis of a sportscar race.</p>
      <p>To get started, click on a race!</p>
    </OnboardingModal>
  );
}

MainOnboarding.propTypes = {
  setOnboardingSeen: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  setOnboardingSeen: setMainOnboardingSeen,
};

export default connect(
  null,
  mapDispatchToProps,
)(MainOnboarding);
