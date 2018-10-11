import * as React from 'react';
import { shallow } from 'enzyme';
import ChartComponent from '../chart.component';
import SkillDoughnut from './skills-doughnut.component';
import { Doughnut } from 'react-chartjs-2';

describe('<SkillDoughnut />', () => {
  it ('renders one <SkillDoughnut />', () => {
    const wrapper = shallow(<ChartComponent/>);
    expect(wrapper.find(SkillDoughnut)).toHaveLength(1);
  })

  it ('renders two <Doughnut />', () => {
    const wrapper = shallow(<SkillDoughnut/>);
    expect(wrapper.find(Doughnut)).toHaveLength(2);
  })
})