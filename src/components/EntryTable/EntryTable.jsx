import PropTypes from 'prop-types';
import React from 'react';

import './EntryTable.scss';
import Card from '../Card';
import TimeInterval from '../TimeInterval';

export default function EntryTable(props) {
  const { averageLapTime, fastestLap } = props;
  return (
    <section className="EntryTable">
      <Card>
        <table className="EntryTable__table">
          <tbody>
            <tr>
              <td>Average lap time</td>
              <td>
                <TimeInterval time={averageLapTime} />
              </td>
            </tr>
            <tr>
              <td>Best lap</td>
              <td>{fastestLap.lapNumber}</td>
            </tr>
            <tr>
              <td>Best lap time</td>
              <td>
                <TimeInterval time={fastestLap.lapTime} />
              </td>
            </tr>
            <tr>
              <td>Fastest driver</td>
              <td>{fastestLap.driverName}</td>
            </tr>
          </tbody>
        </table>
      </Card>
    </section>
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
