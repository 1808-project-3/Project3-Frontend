import * as React from 'react';
import { shallow } from 'enzyme';
import ChartComponent from './chart.component';
import TalentDashboard from '../talent-dashboard.component';
import { Nav, Card } from 'reactstrap';

describe('<ChartComponent />', () => {
  it ('renders one <ChartComponent />', () => {
    const wrapper = shallow(<TalentDashboard/>);
    expect(wrapper.find(ChartComponent)).toHaveLength(1);
  })

  it ('renders one <Nav />', () => {
    const wrapper = shallow(<ChartComponent users={[]}/>);
    expect(wrapper.find(Nav)).toHaveLength(1);
  })

  it ('renders one <Card />', () => {
    const wrapper = shallow(<ChartComponent users={[]}/>);
    expect(wrapper.find(Card)).toHaveLength(1);
  })
})