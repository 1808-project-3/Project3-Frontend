import * as React from 'react';
import { shallow } from 'enzyme';
import AssociatesTile from './dashboard-tile-associates';
import CertifiedAssociatesTile from './dashboard-tile-certified.component';
import ProjectsTile from './dashboard-tile-projects.component';
import TalentDashboard from '../talent-dashboard.component';

describe('<AssociatesTile />', () => {
  it ('renders one <AssociatesTile />', () => {
    const wrapper = shallow(<TalentDashboard/>);
    expect(wrapper.find(AssociatesTile)).toHaveLength(1);
  })
})

describe('<CertifiedAssociatesTile />', () => {
  it ('renders one <CertifiedAssociatesTile />', () => {
    const wrapper = shallow(<TalentDashboard/>);
    expect(wrapper.find(CertifiedAssociatesTile)).toHaveLength(1);
  })
})

describe('<ProjectsTile />', () => {
    it ('renders one <ProjectsTile />', () => {
        const wrapper = shallow(<TalentDashboard/>);
        expect(wrapper.find(ProjectsTile)).toHaveLength(1);
    })
})