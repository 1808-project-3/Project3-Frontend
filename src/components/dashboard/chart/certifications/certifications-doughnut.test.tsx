import * as React from 'react';
import { shallow } from 'enzyme';
import ChartComponent from '../chart.component';
import CertificationsDoughnutComponent from './certifications-doughnut.component';

describe('<CertificationsDoughnutComponent />', () => {
  it ('renders one <CertificationsDoughnutComponent />', () => {
    const wrapper = shallow(<ChartComponent/>);
    expect(wrapper.find(CertificationsDoughnutComponent)).toHaveLength(1);
  })
})
