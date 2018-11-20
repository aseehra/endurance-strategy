import PropTypes from 'prop-types';
import React from 'react';

import './EntryTable.scss';
import Card from '../Card';

export default function EntryTable(props) {
  const { averageLapTime, fastestLap } = props;
  return (
    <div className="EntryTable">
      <Card>
        <table className="EntryTable__table">
          <tbody>
            <tr>
              <td>Average lap time</td>
              <td>{averageLapTime}</td>
            </tr>
            <tr>
              <td>Best lap</td>
              <td>{fastestLap.lapNumber}</td>
            </tr>
            <tr>
              <td>Best lap time</td>
              <td>{fastestLap.lapTime}</td>
            </tr>
            <tr>
              <td>Fastest driver</td>
              <td>{fastestLap.driverName}</td>
            </tr>
          </tbody>
        </table>
      </Card>
    </div>
  );
}

EntryTable.propTypes = {
  fastestLap: PropTypes.shape({
    lapNumber: PropTypes.number,
    lapTime: PropTypes.number,
    driverName: PropTypes.string,
  }).isRequired,
  averageLapTime: PropTypes.number.isRequired,
};
