import PropTypes from 'prop-types';
import React from 'react';

import './RaceEntry.scss';
import Card from '../Card';

export default function RaceEntry(props) {
  const {
    carNumber,
    carClass,
    driverName,
    manufacturer,
    positionInClass,
    positionOverall,
  } = props;
  return (
    <Card>
      <div className="RaceEntry">
        <h2 className="RaceEntry__entryName">{manufacturer}</h2>
        <div className="RaceEntry__carClass">{carClass}</div>
        <div className="RaceEntry__raceNumber RaceEntry__raceNumber--entry">
          {carNumber}
        </div>
        <div className="RaceEntry__raceNumber RaceEntry__raceNumber--overall">
          {positionOverall}
        </div>
        <div className="RaceEntry__raceNumber RaceEntry__raceNumber--inClass">
          {positionInClass}
        </div>
        <div className="RaceEntry__driverName">{driverName}</div>
      </div>
    </Card>
  );
}

RaceEntry.propTypes = {
  carNumber: PropTypes.number.isRequired,
  carClass: PropTypes.string.isRequired,
  manufacturer: PropTypes.string.isRequired,
  positionInClass: PropTypes.number.isRequired,
  positionOverall: PropTypes.number.isRequired,
  driverName: PropTypes.string.isRequired,
};
