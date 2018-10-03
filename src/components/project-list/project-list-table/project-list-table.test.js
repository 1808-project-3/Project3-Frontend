import React from 'react';
import { ProjectListTableComponent } from './project-list-table.component';
import { ProjectListExport } from './ProjectListExport';
import {Table} from 'reactstrap';
import { shallow } from 'enzyme';

describe('Project list table component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<ProjectListTableComponent/>);
    });

    it('it will render <ProjectListExport/> component', () => {
        expect(wrapper.containsMatchingElement(<ProjectListExport/>)).toEqual(true);
    });

    it('it will render <Table/> component', () => {
        expect(wrapper.find('Table').length).toEqual(1);
    });

    it('it will render table header', () => {
        expect(wrapper.find('thead').length).toEqual(1);
    });

});
