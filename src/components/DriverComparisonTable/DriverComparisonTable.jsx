import PropTypes from 'prop-types';
import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

import './DriverComparisonTable.scss';
import Card from '../Card';

export default function DriverComparsionTable(props) {
  const { driverData } = props;
  const colors = ['#0b6e4f', '#fa9f42', '#2b4162', '#721817'];

  const options = {
    legend: {
      display: false,
    },
  };

  const fastestData = {
    labels: driverData.map(driver => driver.driverName),
    datasets: [
      {
        label: 'Fastest lap time (s)',
        data: driverData.map(driver => driver.fastestLapTime),
        backgroundColor: colors,
        hoverBackgroundColor: colors,
      },
    ],
  };
  const fastestOptions = {
    ...options,
    scales: {
      xAxes: [
        {
          ticks: {
            suggestedMin: Math.floor(driverData[0].fastestLapTime),
          },
          scaleLabel: {
            display: true,
            labelString: 'Fastest lap time',
          },
        },
      ],
    },
  };

  const averageData = {
    labels: driverData.map(driver => driver.driverName),
    datasets: [
      {
        label: 'Average lap time (s)',
        data: driverData.map(driver => driver.averageLapTime),
        backgroundColor: colors,
        hoverBackgroundColor: colors,
      },
    ],
  };
  const averageOptions = {
    ...options,
    scales: {
      xAxes: [
        {
          ticks: {
            suggestedMin: Math.floor(driverData[0].averageLapTime),
          },
          scaleLabel: {
            display: true,
            labelString: 'Average lap time',
          },
        },
      ],
    },
  };

  return (
    <section className="DriverComparisonTable">
      <Card>
        <header className="DriverComparisonTable__header">
          <h3 className="DriverComparisonTable__title">Drivers</h3>
        </header>

        <div className="DriverComparisonTable__chart-wrapper">
          <figure className="DriverComparisonTable__chart">
            <HorizontalBar data={fastestData} options={fastestOptions} />
          </figure>
          <figure className="DriverComparisonTable__chart">
            <HorizontalBar data={averageData} options={averageOptions} />
          </figure>
        </div>
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
