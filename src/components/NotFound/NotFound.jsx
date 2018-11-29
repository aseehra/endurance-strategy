import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="NotFound">
      <header>
        <h2>Error</h2>
      </header>
      <p>Oh no, we couldn&apos;t find what you were looking for.</p>

      <Link to="/">Return home</Link>
    </div>
  );
}
