import React from 'react';
import { shallow } from 'enzyme';

import { EntryList } from './EntryList';

describe('EntryList', () => {
  const baseProps = {
    raceId: '25',
    entries: {
      25: {
        id: 25,
        manufacturer: 'Nissan',
        driverName: 'Pipo',
        carNumber: 128,
        carClass: 'P1',
        positionInClass: 2,
        positionOverall: 2,
      },
      30: {
        id: 30,
        manufacturer: 'Porsche',
        driverName: 'Alonso',
        carNumber: 222,
        carClass: 'P1',
        positionInClass: 1,
        positionOverall: 1,
      },
      20: {
        id: 20,
        manufacturer: 'Toyota',
        driverName: 'Sharp',
        carNumber: 33,
        carClass: 'P1',
        positionInClass: 3,
        positionOverall: 3,
      },
    },
    isLoading: false,
    entryFilter: '',
    setSearchFilter: jest.fn(),
    urlQuery: '',
    error: null,
    fetchRaceEntries: jest.fn(),
  };

  it('should render all entries', () => {
    const wrapper = shallow(<EntryList {...baseProps} />);
    expect(wrapper.find('RaceEntry')).toHaveLength(
      Object.values(baseProps.entries).length,
    );
  });

  it('should filter entries', () => {
    let wrapper = shallow(<EntryList {...{ ...baseProps, entryFilter: '2' }} />);
    expect(wrapper.find('RaceEntry')).toHaveLength(2);
    wrapper = shallow(<EntryList {...{ ...baseProps, entryFilter: 'sharp' }} />);
    expect(wrapper.find('RaceEntry')).toHaveLength(1);
    wrapper = shallow(<EntryList {...{ ...baseProps, entryFilter: 'ota' }} />);
    expect(wrapper.find('RaceEntry')).toHaveLength(1);
  });

  it('should call setSearchFilter on mount', () => {
    baseProps.setSearchFilter.mockClear();
    shallow(<EntryList {...baseProps} />);
    expect(baseProps.setSearchFilter).toHaveBeenCalledWith('');

    baseProps.setSearchFilter.mockClear();
    shallow(<EntryList {...{ ...baseProps, urlQuery: '?search=test' }} />);
    expect(baseProps.setSearchFilter).toHaveBeenCalledWith('test');
  });

  it('should call setSearchFilter on update', () => {
    baseProps.setSearchFilter.mockClear();
    const wrapper = shallow(<EntryList {...baseProps} />);
    wrapper.setProps({ urlQuery: '?search=test' });
    wrapper.setProps({ urlQuery: '?search=test' });
    expect(baseProps.setSearchFilter).toHaveBeenCalledTimes(2);
    expect(baseProps.setSearchFilter).toHaveBeenLastCalledWith('test');
  });

  it('should call setSearchFilter on unmount', () => {
    baseProps.setSearchFilter.mockClear();
    const wrapper = shallow(
      <EntryList {...{ ...baseProps, urlQuery: '?search=test' }} />,
    );
    wrapper.unmount();
    expect(baseProps.setSearchFilter).toHaveBeenCalledTimes(2);
    expect(baseProps.setSearchFilter).toHaveBeenLastCalledWith('');
  });

  it('should call fetchRaceEntries', () => {
    baseProps.fetchRaceEntries.mockClear();
    shallow(<EntryList {...{ ...baseProps, entries: null }} />);
    expect(baseProps.fetchRaceEntries).toHaveBeenCalled();
    shallow(<EntryList {...baseProps} />);
    expect(baseProps.fetchRaceEntries).toHaveBeenCalledTimes(1);
  });

  it('should sort the entries by position', () => {
    const wrapper = shallow(<EntryList {...baseProps} />);
    expect(
      wrapper
        .find('RaceEntry')
        .first()
        .prop('id'),
    ).toBe(30);
  });
});
