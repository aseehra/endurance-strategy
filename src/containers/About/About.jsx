import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import AboutPage from '../../components/AboutPage';
import { setMainOnboardingSeen } from '../../actions/ux';
import { getMainOnboardingSeen } from '../../reducers';

export class About extends React.Component {
  componentWillUnmount() {
    const { setOnboardingSeen } = this.props;
    setOnboardingSeen(true);
  }

  render() {
    const { showOnboarding } = this.props;
    if (!showOnboarding) {
      return <Redirect to="/races" />;
    }

    return <AboutPage />;
  }
}

About.propTypes = {
  setOnboardingSeen: PropTypes.func.isRequired,
  showOnboarding: PropTypes.bool.isRequired,
};

const mapDispatchToProps = {
  setOnboardingSeen: setMainOnboardingSeen,
};

const mapStateToProps = state => ({
  showOnboarding: !getMainOnboardingSeen(state),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(About);
