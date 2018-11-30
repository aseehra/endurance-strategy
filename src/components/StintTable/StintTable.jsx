import PropTypes from 'prop-types';
import React from 'react';

import './StintTable.scss';
import Card from '../Card';
import DriverName from '../DriverName';
import TimeInterval from '../TimeInterval';

export default function StintTable(props) {
  const { isMobile, stints } = props;

  const stintRows = stints.map(stint => (
    <tr key={stint.stintStart}>
      <td className="StintTable__cell StintTable__cell--data">{stint.stintStart}</td>
      <td className="StintTable__cell StintTable__cell--data">{stint.stintEnd}</td>
      <td className="StintTable__cell StintTable__cell--data">
        <DriverName name={stint.driverName} isMobile={isMobile} />
      </td>
      <td className="StintTable__cell StintTable__cell--data">
        <TimeInterval time={stint.averageLapTime} />
      </td>
      <td className="StintTable__cell StintTable__cell--data">
        <TimeInterval time={stint.fastestLapTime} />
      </td>
    </tr>
  ));
  return (
    <section className="StintTable">
      <Card>
        <header className="StintTable__header">
          <h3 className="StintTable__title">Stints</h3>
        </header>
        <div className="StintTable__table--scrollable">
          <table className="StintTable__table">
            <thead>
              <tr>
                <th className="StintTable__cell StintTable__cell--heading">Lap Out</th>
                <th className="StintTable__cell StintTable__cell--heading">Lap In</th>
                <th className="StintTable__cell StintTable__cell--heading">Driver</th>
                <th className="StintTable__cell StintTable__cell--heading">
                  Average Lap Time
                </th>
                <th className="StintTable__cell StintTable__cell--heading">
                  Best Lap Time
                </th>
              </tr>
            </thead>
            <tbody>{stintRows}</tbody>
          </table>
        </div>
      </Card>
    </section>
  );
}

StintTable.propTypes = {
  stints: PropTypes.arrayOf(
    PropTypes.shape({
      fastestLapTime: PropTypes.number,
      averageLapTime: PropTypes.number,
      driverName: PropTypes.string,
      stintStart: PropTypes.number,
      stintEnd: PropTypes.number,
    }),
  ).isRequired,
  isMobile: PropTypes.bool.isRequired,
};
