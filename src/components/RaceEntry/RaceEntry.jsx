import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import './RaceEntry.scss';
import Card from '../Card';

export default function RaceEntry(props) {
  const {
    id,
    raceId,
    carNumber,
    carClass,
    driverName,
    manufacturer,
    positionInClass,
    positionOverall,
  } = props;
  return (
    <div className="RaceEntry">
      <Link to={`/race/${raceId}/entry/${id}`} className="unadorned-link">
        <Card className="RaceEntry__card">
          <div className="RaceEntry__contents">
            <div className="RaceEntry__center">
              <h2 className="RaceEntry__entryName" title="Manufacturer">
                {manufacturer}
              </h2>
              <div className="RaceEntry__driverName" title="Current Driver">
                {driverName}
              </div>
            </div>
            <div className="RaceEntry__carClass" title="Class">
              {carClass}
            </div>
            <div
              className="RaceEntry__raceNumber RaceEntry__raceNumber--entry"
              title="Car number"
            >
              #
              {carNumber}
            </div>
            <div
              className="RaceEntry__raceNumber RaceEntry__raceNumber--overall"
              title="Position overall"
            >
              {positionOverall}
            </div>
            <div
              className="RaceEntry__raceNumber RaceEntry__raceNumber--inClass"
              title="Position in class"
            >
              {positionInClass}
            </div>
          </div>
        </Card>
      </Link>
    </div>
  );
}

RaceEntry.propTypes = {
  id: PropTypes.number.isRequired,
  raceId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  carNumber: PropTypes.number.isRequired,
  carClass: PropTypes.string.isRequired,
  manufacturer: PropTypes.string.isRequired,
  positionInClass: PropTypes.number.isRequired,
  positionOverall: PropTypes.number.isRequired,
  driverName: PropTypes.string.isRequired,
};
