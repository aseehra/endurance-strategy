import React from 'react';
import { Link } from 'react-router-dom';

import './AboutPage.scss';
import Carousel from '../Carousel';
import DriverComparisonTable from '../DriverComparisonTable';

const demoData = [
  {
    driverId: 0,
    driverName: 'Libbie Bruen',
    averageLapTime: 96.345,
    fastestLapTime: 94.223,
  },
  {
    driverId: 1,
    driverName: 'Ressie Eichmann',
    averageLapTime: 96.127,
    fastestLapTime: 94.108,
  },
  {
    driverId: 2,
    driverName: 'Bart Donnelly',
    averageLapTime: 96.825,
    fastestLapTime: 93.918,
  },
];

export default function AboutPage() {
  return (
    <div className="AboutPage">
      <div className="AboutPage__content">
        <header className="AboutPage__titles">
          <h1 className="AboutPage__title">Endurance Strategy Reporter</h1>
          <h2 className="AboutPage__subtitle">Discover how a race was won or lost</h2>
          <Link className="AboutPage__getStarted button" to="/races">
            Get started
          </Link>
        </header>
        <section className="AboutPage__carousel">
          <Carousel>
            <figure className="AboutPage__carouselContent">
              <DriverComparisonTable driverData={demoData} />
              <figcaption className="AboutPage__caption">
                View driver statistics
              </figcaption>
            </figure>
            <figure className="AboutPage__carouselContent">
              <img
                src="/images/stint_card.png"
                alt="Stint data for three drivers"
                className="AboutPage__image"
              />
              <figcaption className="AboutPage__caption">
                Compare driver stints
              </figcaption>
            </figure>
            <figure className="AboutPage__carouselContent">
              <img
                src="/images/search.png"
                alt="An example of searching"
                className="AboutPage__image"
              />
              <figcaption className="AboutPage__caption">
                Search for the team/driver/car number you&apos;re interested in
              </figcaption>
            </figure>
            <figure>
              <img
                src="/images/card-explanation.png"
                alt="Exploded-view of a race-entry card"
                className="AboutPage__image"
              />
              <figcaption className="AboutPage__caption">
                Race entries are displayed as if on a timing screen
              </figcaption>
            </figure>
          </Carousel>
        </section>
      </div>
    </div>
  );
}
