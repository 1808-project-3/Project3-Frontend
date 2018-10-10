import * as React from 'react';
import { shallow } from 'enzyme';
import ChartComponent from './chart.component';
import TalentDashboard from '../talent-dashboard.component';

describe('<ChartComponent />', () => {
  it ('renders one <ChartComponent />', () => {
    const wrapper = shallow(<TalentDashboard/>);
    expect(wrapper.find(ChartComponent)).toHaveLength(1);
  })
})