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
            <tr className="EntryTable__row">
              <td className="EntryTable__cell EntryTable__cell--heading">
                Average lap time
              </td>
              <td className="EntryTable__cell EntryTable__cell--data">
                <TimeInterval time={averageLapTime} />
              </td>
            </tr>
            <tr className="EntryTable__row">
              <td className="EntryTable__cell EntryTable__cell--heading">Best lap</td>
              <td className="EntryTable__cell EntryTable__cell--data">
                {fastestLap.lapNumber}
              </td>
            </tr>
            <tr className="EntryTable__row">
              <td className="EntryTable__cell EntryTable__cell--heading">
                Best lap time
              </td>
              <td className="EntryTable__cell EntryTable__cell--data">
                <TimeInterval time={fastestLap.lapTime} />
              </td>
            </tr>
            <tr className="EntryTable__row">
              <td className="EntryTable__cell EntryTable__cell--heading">
                Fastest driver
              </td>
              <td className="EntryTable__cell EntryTable__cell--data">
                {fastestLap.driverName}
              </td>
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
