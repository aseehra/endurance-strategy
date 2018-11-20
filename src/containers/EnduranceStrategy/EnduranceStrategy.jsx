import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import EntryList from '../EntryList';
import PageBanner from '../../components/PageBanner';
import RaceList from '../RaceList';

export default function EnduranceStrategy() {
  return (
    <Router>
      <div className="root">
        <PageBanner />
        <main>
          <Route exact path="/" component={RaceList} />
          <Route exact path="/race/:id" component={EntryList} />
        </main>
      </div>
    </Router>
  );
}
