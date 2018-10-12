import * as React from "react";
import {Col, Row} from "reactstrap";
import ProjectListTableComponent from "./project-list-table/project-list-table.component";
import RecentlyAddedProjectsComponent from "../dashboard/project-cards/recently-added-projects";

const ProjectListComponent: React.SFC<any> = (props) => {
    return (
        <div>
            <Row>
                <Col md={9}><ProjectListTableComponent /></Col>
                <Col md={3}><RecentlyAddedProjectsComponent/></Col>
            </Row>
        </div>
    )
}
export default ProjectListComponent;