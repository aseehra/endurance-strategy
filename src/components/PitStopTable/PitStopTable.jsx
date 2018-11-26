import PropTypes from 'prop-types';
import React from 'react';

import './PitStopTable.scss';
import Card from '../Card';

export default function PitStopTable(props) {
  const { pitStops } = props;
  const pitRows = pitStops.map((stop, index) => (
    <tr key={stop.lapIn}>
      <td>{index + 1}</td>
      <td>{stop.lapIn}</td>
      <td>{stop.lapOut}</td>
      <td>{stop.timeInLane}</td>
    </tr>
  ));
  return (
    <div className="PitStopTable">
      <Card>
        <header className="PitStopTable__header">
          <h3 className="PitStopTable__title">Pit Stops</h3>
        </header>
        <table className="PitStopTable__table">
          <thead>
            <tr>
              <th />
              <th>Lap In</th>
              <th>Lap Out</th>
              <th>Time in Pit Lane</th>
            </tr>
          </thead>
          <tbody>{pitRows}</tbody>
        </table>
      </Card>
    </div>
  );
}

PitStopTable.propTypes = {
  pitStops: PropTypes.arrayOf(
    PropTypes.shape({
      lapIn: PropTypes.number,
      lapOut: PropTypes.number,
      timeInLane: PropTypes.number,
    }),
  ).isRequired,
};
