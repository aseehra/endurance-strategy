import PropTypes from 'prop-types';
import React from 'react';

import './PitStopTable.scss';
import Card from '../Card';
import TimeInterval from '../TimeInterval';

export default function PitStopTable(props) {
  const { pitStops } = props;
  const pitRows = pitStops.map((stop, index) => (
    <tr key={stop.lapIn}>
      <td className="PitStopTable__cell PitStopTable__cell--data">{index + 1}</td>
      <td className="PitStopTable__cell PitStopTable__cell--data">{stop.lapIn}</td>
      <td className="PitStopTable__cell PitStopTable__cell--data">{stop.lapOut}</td>
      <td className="PitStopTable__cell PitStopTable__cell--data">
        <TimeInterval time={stop.timeInLane} />
      </td>
    </tr>
  ));
  return (
    <section className="PitStopTable">
      <Card>
        <header className="PitStopTable__header">
          <h3 className="PitStopTable__title">Pit Stops</h3>
        </header>
        <table className="PitStopTable__table">
          <thead>
            <tr>
              <th className="PitStopTable__cell PitStopTable__cell--heading">Stop</th>
              <th className="PitStopTable__cell PitStopTable__cell--heading">Lap In</th>
              <th className="PitStopTable__cell PitStopTable__cell--heading">
                Lap Out
              </th>
              <th className="PitStopTable__cell PitStopTable__cell--heading">
                Time in Pit Lane
              </th>
            </tr>
          </thead>
          <tbody>{pitRows}</tbody>
        </table>
      </Card>
    </section>
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
