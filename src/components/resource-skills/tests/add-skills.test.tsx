import * as React from 'react';
import {shallow} from 'enzyme';
import AddSkillsComponent from '../add-skills.component';
import {store} from '../../../Store';
// import configureStore from 'redux-mock-store';
// const mockStore = configureStore();

describe( 'AddSkillsComponent', () => {
    it('Render a form', () => {
    const wrapper = shallow(<AddSkillsComponent store={store} />).dive();
      expect(wrapper.find('Form').length).toEqual(1);
    });
    it('Render the form groups', () => {
      const wrapper = shallow(<AddSkillsComponent store={store} />).dive();
        expect(wrapper.find('FormGroup').length).toEqual(15);
      });
});