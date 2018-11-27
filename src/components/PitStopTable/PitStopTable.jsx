import PropTypes from 'prop-types';
import React from 'react';

import './PitStopTable.scss';
import Card from '../Card';
import TimeInterval from '../TimeInterval';

export default function PitStopTable(props) {
  const { pitStops } = props;
  const pitRows = pitStops.map((stop, index) => (
    <tr key={stop.lapIn}>
      <td>{index + 1}</td>
      <td>{stop.lapIn}</td>
      <td>{stop.lapOut}</td>
      <td>
        <TimeInterval time={stop.timeInLane} />
      </td>
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
              <th className="PitStopTable__tableHeading">Stop</th>
              <th className="PitStopTable__tableHeading">Lap In</th>
              <th className="PitStopTable__tableHeading">Lap Out</th>
              <th className="PitStopTable__tableHeading">Time in Pit Lane</th>
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
