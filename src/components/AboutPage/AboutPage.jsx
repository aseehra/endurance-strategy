import PropTypes from 'prop-types';
import React from 'react';

import './AboutPage.scss';

export default function AboutPage(props) {
  const { onDismiss } = props;
  return (
    <div className="AboutPage">
      <section>
        <header>
          <h2 className="AboutPage__sectionHeader">About</h2>
        </header>
        <p className="AboutPage__para">
          The Endurance Strategy Reporter brings detailed post-race analysis straight to
          your fingertips. For those who are fascinated by the strategy calls that teams
          make, ESR aims makes it easy to look back and see how a team won (or lost) a
          race.
        </p>
        <button className="AboutPage__button" type="button" onClick={onDismiss}>
          Get started
        </button>
      </section>
      <section>
        <header>
          <h2 className="AboutPage__sectionHeader">Features</h2>
        </header>
        <ul className="AboutPage__featureList">
          <li className="AboutPage__featureListItem">
            <header>
              <h3 className="AboutPage__featureHeader">
                ESR stores archives of prior races&apos; live-timing data
              </h3>
            </header>
            <img
              src="/images/races.png"
              alt="Example races"
              className="AboutPage__featureImage"
            />
          </li>
          <li className="AboutPage__featureListItem">
            <header>
              <h3 className="AboutPage__featureHeader">
                At a glance, see a car&apos;s position and class
              </h3>
            </header>
            <img
              src="/images/card-explanation.png"
              alt="A blown up card with explantions of the contained fields"
              className="AboutPage__featureImage"
            />
          </li>
          <li className="AboutPage__featureListItem">
            <header>
              <h3 className="AboutPage__featureHeader">
                Search for the team, driver or car number that you are interested in
              </h3>
            </header>
            <img
              src="/images/search.png"
              alt="An example search"
              className="AboutPage__featureImage"
            />
          </li>
          <li className="AboutPage__featureListItem">
            <header>
              <h3 className="AboutPage__featureHeader">
                See driver and stint statistics, along with pit stop times
              </h3>
            </header>
            <img
              src="/images/stint_card.png"
              alt="Example stint data"
              className="AboutPage__featureImage"
            />
          </li>
        </ul>
        <button type="button" onClick={onDismiss} className="AboutPage__button">
          Get started
        </button>
      </section>
    </div>
  );
}

AboutPage.propTypes = {
  onDismiss: PropTypes.func.isRequired,
};
