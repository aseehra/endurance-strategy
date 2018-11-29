import React from 'react';
import { Link } from 'react-router-dom';

import './NotFound.scss';

export default function NotFound() {
  return (
    <div className="NotFound">
      <header>
        <h2 className="NotFound__header">Error</h2>
      </header>
      <p>Oh no, we couldn&apos;t find what you were looking for.</p>

      <Link to="/" className="NotFound__link">
        Return home
      </Link>
    </div>
  );
}
