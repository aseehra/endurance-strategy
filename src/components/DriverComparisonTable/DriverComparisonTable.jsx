import PropTypes from 'prop-types';
import React from 'react';

import './DriverComparisonTable.scss';
import Card from '../Card';
import TimeInterval from '../TimeInterval';

export default function DriverComparsionTable(props) {
  const { driverData } = props;
  const driverRows = driverData
    .sort((driverA, driverB) => driverA.fastestLapTime - driverB.fastestLapTime)
    .map(driver => (
      <tr key={driver.driverId}>
        <td className="DriverComparisonTable__cell DriverComparisonTable__cell--data">
          {driver.driverName}
        </td>
        <td className="DriverComparisonTable__cell DriverComparisonTable__cell--data">
          <TimeInterval time={driver.fastestLapTime} />
        </td>
        <td className="DriverComparisonTable__cell DriverComparisonTable__cell--data">
          <TimeInterval time={driver.averageLapTime} />
        </td>
      </tr>
    ));

  return (
    <section className="DriverComparisonTable">
      <Card>
        <header className="DriverComparisonTable__header">
          <h3 className="DriverComparisonTable__title">Drivers</h3>
        </header>
        <table className="DriverComparisonTable__table">
          <thead>
            <tr>
              {/* eslint-disable max-len */}
              <th className="DriverComparisonTable__cell DriverComparisonTable__cell--heading">
                Driver Name
              </th>
              <th className="DriverComparisonTable__cell DriverComparisonTable__cell--heading">
                Best Lap Time
              </th>
              <th className="DriverComparisonTable__cell DriverComparisonTable__cell--heading">
                Average Lap Time
              </th>
              {/* eslint-enable max-len */}
            </tr>
          </thead>
          <tbody>{driverRows}</tbody>
        </table>
      </Card>
    </section>
  );
}

DriverComparsionTable.propTypes = {
  driverData: PropTypes.arrayOf(
    PropTypes.shape({
      driverId: PropTypes.number.isRequired,
      driverName: PropTypes.string.isRequired,
      fastestLapTime: PropTypes.number.isRequired,
      averageLapTime: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
