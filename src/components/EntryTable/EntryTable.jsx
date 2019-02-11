import React from 'react';

import './EntryTable.scss';
import Card from '../Card';
import TimeInterval from '../TimeInterval';
import { statistics as statisticsType } from '../../types';

export default function EntryTable({ primaryStatistics, secondaryStatistics }) {
  const { averageLapTime, fastestLap } = primaryStatistics;
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
            {secondaryStatistics && (
              <tr className="EntryTable__row fadeIn">
                <td className="EntryTable__cell" />
                <td className="EntryTable__cell EntryTable__cell--comparison">
                  <TimeInterval time={secondaryStatistics.averageLapTime} />
                </td>
              </tr>
            )}
            <tr className="EntryTable__row">
              <td className="EntryTable__cell EntryTable__cell--heading">Best lap</td>
              <td className="EntryTable__cell EntryTable__cell--data">
                {fastestLap.lapNumber}
              </td>
            </tr>
            {secondaryStatistics && (
              <tr className="EntryTable__row fadeIn">
                <td className="EntryTable__cell" />
                <td className="EntryTable__cell EntryTable__cell--comparison">
                  {secondaryStatistics.fastestLap.lapNumber}
                </td>
              </tr>
            )}
            <tr className="EntryTable__row">
              <td className="EntryTable__cell EntryTable__cell--heading">
                Best lap time
              </td>
              <td className="EntryTable__cell EntryTable__cell--data">
                <TimeInterval time={fastestLap.lapTime} />
              </td>
            </tr>
            {secondaryStatistics && (
              <tr className="EntryTable__row fadeIn">
                <td className="EntryTable__cell" />
                <td className="EntryTable__cell EntryTable__cell--comparison">
                  <TimeInterval time={secondaryStatistics.fastestLap.lapTime} />
                </td>
              </tr>
            )}
            <tr className="EntryTable__row">
              <td className="EntryTable__cell EntryTable__cell--heading">
                Fastest driver
              </td>
              <td className="EntryTable__cell EntryTable__cell--data">
                {fastestLap.driverName}
              </td>
            </tr>
            {secondaryStatistics && (
              <tr className="EntryTable__row fadeIn">
                <td className="EntryTable__cell" />
                <td className="EntryTable__cell EntryTable__cell--comparison">
                  {secondaryStatistics.fastestLap.driverName}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </Card>
    </section>
  );
}

EntryTable.propTypes = {
  primaryStatistics: statisticsType.isRequired,
  secondaryStatistics: statisticsType,
};

EntryTable.defaultProps = {
  secondaryStatistics: null,
};
