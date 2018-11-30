import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import AboutPage from '../../components/AboutPage';
import { setMainOnboardingSeen } from '../../actions/ux';

export class About extends React.Component {
  constructor(props) {
    super(props);
    this.onDismiss = this.onDismiss.bind(this);
  }

  componentWillUnmount() {
    const { setOnboardingSeen } = this.props;
    setOnboardingSeen(true);
  }

  onDismiss() {
    const { history, match, setOnboardingSeen } = this.props;
    setOnboardingSeen(true);
    if (match && match.path === '/about') {
      history.push('/');
    }
  }

  render() {
    return <AboutPage onDismiss={this.onDismiss} />;
  }
}

About.propTypes = {
  setOnboardingSeen: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }),
  match: PropTypes.shape({ path: PropTypes.string.isRequired }),
};

About.defaultProps = {
  history: null,
  match: null,
};

const mapDispatchToProps = {
  setOnboardingSeen: setMainOnboardingSeen,
};

const mapStateToProps = (state, ownProps) => ({
  history: ownProps.history,
  match: ownProps.match,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(About);
