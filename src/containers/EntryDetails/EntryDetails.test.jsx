import React from 'react';
import { shallow } from 'enzyme';
import { Redirect } from 'react-router-dom';

import About from '../About';
import DriverComparisonTable from '../../components/DriverComparisonTable';
import EntryTable from '../../components/EntryTable';
import PitStopTable from '../../components/PitStopTable';
import StintData from '../StintData';
import { EntryDetails } from './EntryDetails';

describe('EntryDetails', () => {
  const baseProps = {
    entryId: '2',
    fetchStatistics: jest.fn(),
    statistics: null,
    error: null,
    showOnboarding: false,
  };

  it('should redirect to 404 if passed an error', () => {
    const wrapper = shallow(
      <EntryDetails {...{ ...baseProps, error: new Error('test') }} />,
    );
    const redirect = wrapper.find(Redirect);
    expect(redirect).toHaveLength(1);
    expect(redirect.prop('to')).toEqual('/404');
  });

  it('should display onboarding', () => {
    const wrapper = shallow(
      <EntryDetails {...{ ...baseProps, showOnboarding: true }} />,
    );
    expect(wrapper.find(About)).toHaveLength(1);
  });

  it('should render nothing if statistics are undefined', () => {
    const wrapper = shallow(<EntryDetails {...baseProps} />);
    expect(wrapper.equals(null)).toBeTruthy();
  });

  it('should call fetchStatistics', () => {
    baseProps.fetchStatistics.mockClear();
    shallow(<EntryDetails {...baseProps} />);
    expect(baseProps.fetchStatistics).toHaveBeenCalledTimes(1);
    expect(baseProps.fetchStatistics).toHaveBeenCalledWith('2');
  });

  it('should render all subcontainers', () => {
    const statistics = {
      averageLapTime: 90,
      fastestLap: {
        lapNumber: 25,
        lapTime: 95,
        driverName: 'Pipo',
      },
      driverData: [
        {
          driverId: 25, driverName: 'Pipo', fastestLapTime: 95, averageLapTime: 98,
        },
      ],
    };

    const wrapper = shallow(<EntryDetails {...{ ...baseProps, statistics }} />);
    expect(wrapper.find(EntryTable)).toHaveLength(1);
    expect(wrapper.find(DriverComparisonTable)).toHaveLength(1);
    expect(wrapper.find(PitStopTable)).toHaveLength(1);
    expect(wrapper.find(StintData)).toHaveLength(1);
  });
});
