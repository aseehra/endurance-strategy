import PropTypes from 'prop-types';
import React from 'react';

import './OnboardingModal.scss';

export default class OnboardingModal extends React.Component {
  constructor(props) {
    super(props);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  onKeyDown(e) {
    const { onDismiss } = this.props;
    if (['Escape', 'Enter', ' '].includes(e.key)) {
      onDismiss();
    }
  }

  render() {
    const { children, onDismiss } = this.props;
    return (
      <section
        className="OnboardingModal"
        onClick={() => onDismiss()}
        onKeyDown={this.onKeyDown}
        tabIndex="0"
      >
        {children}
        <button type="button">Dismiss</button>
      </section>
    );
  }
}

OnboardingModal.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
  onDismiss: PropTypes.func.isRequired,
};

OnboardingModal.defaultProps = {
  children: [],
};
