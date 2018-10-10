import * as React from 'react';
import { shallow } from 'enzyme';
import RecentlyAddedProjectsComponent from './recently-added-projects';
import ResourceRequirementComponent from './resource-requirement';
import TalentDashboard from '../talent-dashboard.component';

describe('<RecentlyAddedProjectsComponent />', () => {
  it ('renders one <RecentlyAddedProjectsComponent />', () => {
    const wrapper = shallow(<TalentDashboard/>);
    expect(wrapper.find(RecentlyAddedProjectsComponent)).toHaveLength(1);
  })
})

describe('<ResourceRequirementComponent />', () => {
  it ('renders one <ResourceRequirementComponent />', () => {
    const wrapper = shallow(<TalentDashboard/>);
    expect(wrapper.find(ResourceRequirementComponent)).toHaveLength(1);
  })
})