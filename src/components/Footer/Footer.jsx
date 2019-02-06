import propTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.scss';

export default function Footer({ onAboutClick }) {
  return (
    <footer role="contentinfo" className="Footer">
      <hr className="Footer__line" />
      <div className="Footer--centered">
        <Link className="Footer__link" to="/" onClick={onAboutClick}>
          About
        </Link>
        <a
          className="Footer__link Footer__link--black"
          href="https://github.com/aseehra/endurance-strategy"
          aria-label="View this project on GitHub"
          title="View this project on GitHub"
        >
          <span aria-hidden className="fab fa-github fa-2x" />
        </a>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  onAboutClick: propTypes.func,
};

Footer.defaultProps = {
  onAboutClick: () => true,
};
