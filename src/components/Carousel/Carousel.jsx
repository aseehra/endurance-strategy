import propTypes from 'prop-types';
import React, { Children } from 'react';

import './Carousel.scss';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = { activeChild: 0 };
    this.timer = null;

    this.nextChild = this.nextChild.bind(this);
  }

  componentDidMount() {
    const { advanceInterval } = this.props;
    this.timer = setInterval(this.nextChild, advanceInterval);
  }

  componentWillUnmount() {
    this.clearTimer();
  }

  onIndicatorClick(index) {
    this.clearTimer();
    this.displayChildWithIndex(index);
  }

  clearTimer() {
    clearInterval(this.timer);
    this.timer = null;
  }

  displayChildWithIndex(index) {
    this.setState({ activeChild: index });
  }

  nextChild() {
    const { children } = this.props;
    const { activeChild } = this.state;
    this.setState({
      activeChild: (activeChild + 1) % Children.count(children),
    });
  }

  render() {
    const { children } = this.props;
    const { activeChild } = this.state;

    const indicatorDots = Children.map(children, (child, index) => (
      <button
        type="button"
        onClick={() => this.onIndicatorClick(index)}
        className={`button Carousel__dot${
          index === activeChild ? ' Carousel__dot--active' : ''
        }`}
      />
    ));

    return (
      <div className="Carousel">
        {Children.count(children) > 1 ? children[activeChild] : children}
        <div className="Carousel__indicators">{indicatorDots}</div>
      </div>
    );
  }
}

Carousel.propTypes = {
  advanceInterval: propTypes.number,
  children: propTypes.node.isRequired,
};

Carousel.defaultProps = {
  advanceInterval: 3000,
};
