import PropTypes from 'prop-types';
import React from 'react';
import { defaults } from 'react-chartjs-2';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import About from '../About';
import EntryDetails from '../EntryDetails';
import EntryList from '../EntryList';
import Footer from '../../components/Footer';
import NotFound from '../../components/NotFound';
import PageTitle from '../PageTitle';
import RaceList from '../RaceList';
import TopNav from '../../components/TopNav';
import { fetchRaces as fetchRacesAction } from '../../actions/races';
import {
  deserializeOnboardingCookies,
  updateWindowWidth as updateWindowWidthAction,
} from '../../actions/ux';

class EnduranceStrategy extends React.Component {
  constructor(props) {
    super(props);

    defaults.global.defaultFontFamily = "'Lato', sans-serif";

    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    const { checkOnboarding, fetchRaces, updateWindowWidth } = this.props;
    checkOnboarding();
    fetchRaces();
    updateWindowWidth(window.innerWidth);
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    const { updateWindowWidth } = this.props;
    updateWindowWidth(window.innerWidth);
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
          <main role="main">
            <Switch>
              <Route path="/race/:raceId/entry/:entryId" component={EntryDetails} />
              <Route path="/race/:raceId" component={EntryList} />
              <Route path="/404" component={NotFound} />
              <Route path="/about" component={About} />
              <Route path="/" component={RaceList} />
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

EnduranceStrategy.propTypes = {
  fetchRaces: PropTypes.func.isRequired,
  checkOnboarding: PropTypes.func.isRequired,
  updateWindowWidth: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  fetchRaces: fetchRacesAction,
  checkOnboarding: deserializeOnboardingCookies,
  updateWindowWidth: updateWindowWidthAction,
};

export default connect(
  null,
  mapDispatchToProps,
)(EnduranceStrategy);
