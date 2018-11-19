import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import PageBanner from '../../components/PageBanner';
import RaceList from '../RaceList';

export default function EnduranceStrategy() {
  return (
    <Router>
      <div className="root">
        <PageBanner />
        <main>
          <RaceList />
        </main>
      </div>
    </Router>
  );
}
