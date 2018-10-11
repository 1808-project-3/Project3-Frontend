import * as React from 'react';
import { shallow } from 'enzyme';
import ChartComponent from '../chart.component';
import CertificationsDoughnutComponent from './certifications-doughnut.component';
import { Doughnut } from 'react-chartjs-2';

describe('<CertificationsDoughnutComponent />', () => {
  it ('renders one <CertificationsDoughnutComponent />', () => {
    const wrapper = shallow(<ChartComponent/>);
    expect(wrapper.find(CertificationsDoughnutComponent)).toHaveLength(1);
  })

  it ('renders one <Doughnut />', () => {
    const wrapper = shallow(<CertificationsDoughnutComponent/>);
    expect(wrapper.find(Doughnut)).toHaveLength(1);
  })
})
