import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import EntryList from '../EntryList';
import PageBanner from '../../components/PageBanner';
import RaceList from '../RaceList';
import { fetchRaces as fetchRacesAction } from '../../actions/races';

export class EnduranceStrategy extends React.Component {
  componentDidMount() {
    const { fetchRaces } = this.props;
    fetchRaces();
  }

  render() {
    return (
      <Router>
        <div className="root">
          <PageBanner />
          <main>
            <Route exact path="/" component={RaceList} />
            <Route exact path="/race/:raceId" component={EntryList} />
          </main>
        </div>
      </Router>
    );
  }
}

EnduranceStrategy.propTypes = {
  fetchRaces: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  fetchRaces: fetchRacesAction,
};

export default connect(
  null,
  mapDispatchToProps,
)(EnduranceStrategy);
