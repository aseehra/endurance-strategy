import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import EntryDetails from '../EntryDetails';
import EntryList from '../EntryList';
import PageTitle from '../PageTitle';
import RaceList from '../RaceList';
import TopNav from '../../components/TopNav';
import { fetchRaces as fetchRacesAction } from '../../actions/races';

class EnduranceStrategy extends React.Component {
  componentDidMount() {
    const { fetchRaces } = this.props;
    fetchRaces();
  }

  render() {
    return (
      <Router>
        <div className="root">
          {/* Unfortunatley, we cannot use path-to-regex's optional
          parameters, as because of the '/entry' string */}
          <Route exact path="/race/:raceId" component={TopNav} />
          <Route exact path="/race/:raceId/entry/:entryId" component={TopNav} />
          <PageTitle />
          <main>
            <Switch>
              <Route path="/race/:raceId/entry/:entryId" component={EntryDetails} />
              <Route path="/race/:raceId" component={EntryList} />
              <Route path="/" component={RaceList} />
            </Switch>
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
