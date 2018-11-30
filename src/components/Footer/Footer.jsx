import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.scss';

export default function Footer() {
  return (
    <footer role="contentinfo" className="Footer">
      <hr className="Footer__line" />
      <div className="Footer--centered">
        <Link className="Footer__link" to="/about">
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
