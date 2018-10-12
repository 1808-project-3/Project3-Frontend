import * as React from 'react';
import { shallow } from 'enzyme';
import RecentlyAddedProjectsComponent from './recently-added-projects';
import ResourceRequirementComponent from './resource-requirement';
import TalentDashboard from '../talent-dashboard.component';
import { Card, CardHeader, CardBody, ListGroup, CardLink, ListGroupItem } from 'reactstrap';

describe('<RecentlyAddedProjectsComponent />', () => {
  it ('renders one <RecentlyAddedProjectsComponent />', () => {
    const wrapper = shallow(<TalentDashboard/>);
    expect(wrapper.find(RecentlyAddedProjectsComponent)).toHaveLength(1);
  })

  it ('renders one <Card />', () => {
    const wrapper = shallow(<RecentlyAddedProjectsComponent/>);
    expect(wrapper.find(Card)).toHaveLength(1);
  })

  it ('renders one <CardHeader />', () => {
    const wrapper = shallow(<RecentlyAddedProjectsComponent/>);
    expect(wrapper.find(CardHeader)).toHaveLength(1);
  })

  it ('renders one <CardBody />', () => {
    const wrapper = shallow(<RecentlyAddedProjectsComponent/>);
    expect(wrapper.find(CardBody)).toHaveLength(1);
  })

  it ('renders one <ListGroup />', () => {
    const wrapper = shallow(<RecentlyAddedProjectsComponent/>);
    expect(wrapper.find(ListGroup)).toHaveLength(1);
  })

  it ('renders one <CardLink />', () => {
    const wrapper = shallow(<RecentlyAddedProjectsComponent/>);
    expect(wrapper.find(CardLink)).toHaveLength(1);
  })

  it ('renders five <ListGroupItem />', () => {
    const wrapper = shallow(<RecentlyAddedProjectsComponent/>);
    wrapper.setState({ recentlyAddedProjects: [{id: 1, name: 'Project 1'}, {id: 2, name: 'Project 2'}, 
    {id: 3, name: 'Project 3'}, {id: 4, name: 'Project 4'}, {id: 5, name: 'Project 5'}] });
    expect(wrapper.find(ListGroupItem)).toHaveLength(5);
  })

  it ('renders eight <ListGroupItem />', () => {
    const wrapper = shallow(<RecentlyAddedProjectsComponent/>);
    wrapper.setState({ recentlyAddedProjects: [{id: 1, name: 'Project 1'}, {id: 2, name: 'Project 2'}, 
    {id: 3, name: 'Project 3'}, {id: 4, name: 'Project 4'}, {id: 5, name: 'Project 5'}, 
    {id: 6, name: 'Project 6'}, {id: 7, name: 'Project 7'}, {id: 8, name: 'Project 8'}]});
    expect(wrapper.find(ListGroupItem)).toHaveLength(8);
  })
})

describe('<ResourceRequirementComponent />', () => {
  it ('renders one <ResourceRequirementComponent />', () => {
    const wrapper = shallow(<TalentDashboard/>);
    expect(wrapper.find(ResourceRequirementComponent)).toHaveLength(1);
  })
  
  it ('renders one <Card />', () => {
    const wrapper = shallow(<ResourceRequirementComponent/>);
    expect(wrapper.find(Card)).toHaveLength(1);
  })

  it ('renders one <CardHeader />', () => {
    const wrapper = shallow(<ResourceRequirementComponent/>);
    expect(wrapper.find(CardHeader)).toHaveLength(1);
  })

  it ('renders one <CardBody />', () => {
    const wrapper = shallow(<ResourceRequirementComponent/>);
    expect(wrapper.find(CardBody)).toHaveLength(1);
  })

  it ('renders one <ListGroup />', () => {
    const wrapper = shallow(<ResourceRequirementComponent/>);
    expect(wrapper.find(ListGroup)).toHaveLength(1);
  })

  it ('renders six <ListGroupItem />', () => {
    const wrapper = shallow(<ResourceRequirementComponent/>);
    wrapper.setState({ resourceRequirements: [{id: 1, name: 'Project 1'}, {id: 2, name: 'Project 2'}, 
    {id: 3, name: 'Project 3'}, {id: 4, name: 'Project 4'}, {id: 5, name: 'Project 5'}, 
    {id: 6, name: 'Project 6'}] });
    expect(wrapper.find(ListGroupItem)).toHaveLength(6);
  })

  it ('renders nine <ListGroupItem />', () => {
    const wrapper = shallow(<ResourceRequirementComponent/>);
    wrapper.setState({ resourceRequirements: [{id: 1, name: 'Project 1'}, {id: 2, name: 'Project 2'}, 
    {id: 3, name: 'Project 3'}, {id: 4, name: 'Project 4'}, {id: 5, name: 'Project 5'}, 
    {id: 6, name: 'Project 6'}, {id: 7, name: 'Project 7'}, {id: 8, name: 'Project 8'}, 
    {id: 9, name: 'Project 9'}] });
    expect(wrapper.find(ListGroupItem)).toHaveLength(9);
  })
})