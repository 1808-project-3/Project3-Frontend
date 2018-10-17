import React from 'react';
import { ProjectListTableComponent } from './project-list-table.component';
import { ProjectListExport } from './Project-list-export';
import { Table } from 'reactstrap';
import { shallow } from 'enzyme';

let wrapper;
const mockGetProjectName = jest.fn();
const mockUpdateViewRow = jest.fn();
const mockGetAssociateList = jest.fn();
const mockGetProjectList = jest.fn();
let mockViewRow = 2;
let mockData = [
    {
        customer: "JP Morgan",
        description: "Quarterly Analytics for the 2018 3rd quarter",
        endDate: "2018-08-30",
        location: "New York, NY",
        name: " Financial Analytics",
        projectId: 59,
        startDate: "2018-06-01",
        supervisorId: 30
    }
];

beforeEach(() => {
    wrapper = shallow(
        <ProjectListTableComponent
            viewRow={mockViewRow}
            projectList={mockData}
            getProjectName={mockGetProjectName}
            updateViewRow={mockUpdateViewRow}
            getAssociateList={mockGetAssociateList}
            getProjectList={mockGetProjectList}
        />);
});

describe('Mounting <ProjectListTableComponent/> Component', () => {

    it('it will render a table', () => {
        expect(wrapper.find('Table')).toHaveLength(1);
    });

    it('it will render table header', () => {
        expect(wrapper.find('Table > thead')).toHaveLength(1);
    });

    it('it will render table titles', () => {
        expect(wrapper.find('Table > thead> tr > th')).toHaveLength(5);
    });

    it('it will render table body', () => {
        expect(wrapper.find('Table > tbody')).toHaveLength(1);
    });

    it('it will render table data', () => {
        expect(wrapper.find('Table > tbody > tr')).toHaveLength(1);
    });

    it('it will render 5 column of data per row', () => {
        expect(wrapper.find('Table > tbody > tr > td')).toHaveLength(5);
    });

});
