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
  setMainOnboardingSeen as setMainOnboardingSeenAction,
} from '../../actions/ux';

class EnduranceStrategy extends React.Component {
  constructor(props) {
    super(props);

    defaults.global.defaultFontFamily = "'Lato', sans-serif";

    this.onResize = this.onResize.bind(this);
    this.onAboutClick = this.onAboutClick.bind(this);
  }

  componentDidMount() {
    const { checkOnboarding, fetchRaces, updateWindowWidth } = this.props;
    checkOnboarding();
    fetchRaces();
    updateWindowWidth(window.innerWidth);
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize() {
    const { updateWindowWidth } = this.props;
    updateWindowWidth(window.innerWidth);
  }

  onAboutClick() {
    const { setOnboardingSeen } = this.props;
    setOnboardingSeen(false);
    return true;
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={About} />
          <Route
            render={() => (
              <div className="root">
                {/* Unfortunatley, we cannot use path-to-regex's optional
          parameters, as because of the '/entry' string */}
                <Route exact path="/race/:raceId" component={TopNav} />
                <Route exact path="/race/:raceId/entry/:entryId" component={TopNav} />
                <Route component={PageTitle} />
                <main role="main">
                  <Switch>
                    <Route
                      path="/race/:raceId/entry/:entryId"
                      component={EntryDetails}
                    />
                    <Route path="/race/:raceId" component={EntryList} />
                    <Route path="/races" component={RaceList} />
                    <Route path="/404" component={NotFound} />
                  </Switch>
                </main>
                <Footer onAboutClick={this.onAboutClick} />
              </div>
            )}
          />
        </Switch>
      </Router>
    );
  }
}

EnduranceStrategy.propTypes = {
  fetchRaces: PropTypes.func.isRequired,
  checkOnboarding: PropTypes.func.isRequired,
  updateWindowWidth: PropTypes.func.isRequired,
  setOnboardingSeen: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  fetchRaces: fetchRacesAction,
  checkOnboarding: deserializeOnboardingCookies,
  updateWindowWidth: updateWindowWidthAction,
  setOnboardingSeen: setMainOnboardingSeenAction,
};

export default connect(
  null,
  mapDispatchToProps,
)(EnduranceStrategy);
