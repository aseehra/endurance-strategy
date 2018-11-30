import React from 'react';
import { shallow } from 'enzyme';

import DriverName from './DriverName';

describe('DriverName', () => {
  it('should shorten names if isMobile is true', () => {
    let wrapper = shallow(<DriverName name="Arun Seehra" isMobile />);
    expect(wrapper.find('.DriverName').text()).toBe('A. Seehra');

    wrapper = shallow(<DriverName name="Arun Manmohan Seehra" isMobile />);
    expect(wrapper.find('.DriverName').text()).toBe('A. M. Seehra');
  });

  it('should not shorten single-component names', () => {
    const wrapper = shallow(<DriverName name="Madonna" isMobile />);
    expect(wrapper.find('.DriverName').text()).toBe('Madonna');
  });

  it('should not shorten if isMobile is false', () => {
    let wrapper = shallow(<DriverName name="Arun" isMobile={false} />);
    expect(wrapper.find('.DriverName').text()).toBe('Arun');

    wrapper = shallow(<DriverName name="Arun Manmohan Seehra" isMobile={false} />);
    expect(wrapper.find('.DriverName').text()).toBe('Arun Manmohan Seehra');

    wrapper = shallow(<DriverName name="Arun Seehra" isMobile={false} />);
    expect(wrapper.find('.DriverName').text()).toBe('Arun Seehra');
  });
});
