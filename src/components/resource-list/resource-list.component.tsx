import * as React from "react";
import {Col, Row} from "reactstrap";
import TabComponent from "./tabs/tab.component";
import RecentlyAddedProjectsComponent from "../dashboard/project-cards/recently-added-projects";

const ResourceListComponent: React.SFC<any> = (props) => {
    return (
        <div>
            <Row>
                <Col md={9}><TabComponent /></Col>
                <Col md={3}><RecentlyAddedProjectsComponent/></Col>
            </Row>
        </div>
    )
}
export default ResourceListComponent;