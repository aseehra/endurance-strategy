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
      <header className="AboutPage__titles">
        <h1 className="AboutPage__title">Endurance Strategy Reporter</h1>
        <h2 className="AboutPage__subtitle">Discover how a race was won or lost</h2>
        <Link className="AboutPage__getStarted button" to="/races">
          Get started
        </Link>
      </header>
      <section>
        <Carousel>
          <figure className="AboutPage__carouselContent">
            <DriverComparisonTable driverData={demoData} />
            <figcaption className="AboutPage__caption">
              View driver statistics
            </figcaption>
          </figure>
        </Carousel>
      </section>
    </div>
  );
}
