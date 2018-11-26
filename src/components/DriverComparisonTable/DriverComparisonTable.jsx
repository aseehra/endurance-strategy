import PropTypes from 'prop-types';
import React from 'react';

import './DriverComparisonTable.scss';
import Card from '../Card';

export default function DriverComparsionTable(props) {
  const { driverData } = props;
  const driverRows = driverData
    .sort((driverA, driverB) => driverA.fastestLapTime - driverB.fastestLapTime)
    .map(driver => (
      <tr key={driver.driverId}>
        <td>{driver.driverName}</td>
        <td>{driver.fastestLapTime}</td>
        <td>{driver.averageLapTime}</td>
      </tr>
    ));

  return (
    <div className="DriverComparisonTable">
      <Card>
        <header className="DriverComparisonTable__header">
          <h2 className="h5">Drivers</h2>
        </header>
        <table className="DriverComparisonTable__table">
          <thead>
            <tr>
              <th>Driver Name</th>
              <th>Fastest Lap Time</th>
              <th>Average Lap Time</th>
            </tr>
          </thead>
          <tbody>{driverRows}</tbody>
        </table>
      </Card>
    </div>
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
