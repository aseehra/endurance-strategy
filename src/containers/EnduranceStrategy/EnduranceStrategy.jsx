import React from 'react';

import RaceList from '../RaceList';

export default function EnduranceStrategy() {
  return (
    <div className="root">
      <header className="page-header">
        <h1 className="h5">Endurance Strategy Reporter</h1>
      </header>

      <main>
        <RaceList />
      </main>
    </div>
  );
}
