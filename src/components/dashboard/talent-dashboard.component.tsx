import * as React from 'react';
import { Col, Container, Row, Button } from 'reactstrap';
// import DashboardTilesContainer from './dashboard-tiles/dashboard-tiles.component';
import ChartComponent from './chart/chart.component';
import AssociatesTile from './dashboard-tiles/dashboard-tile-associates';
import CertifiedAssociatesTile from './dashboard-tiles/dashboard-tile-certified.component';
import ProjectsTile from './dashboard-tiles/dashboard-tile-projects.component';
import RecentlyAddedProjectsComponent from './project-cards/recently-added-projects';
import ResourceRequirementComponent from './project-cards/resource-requirement';

export default class TalentDashboard extends React.Component {


    public render() {
        return (
            <Container>
                <Row>
                    <Col md={12}>
                        <h3>DashBoard</h3>
                        <Button>Add Profile</Button>
                    </Col>

                </Row>
                
                <Row>
                    <Col md={4}>
                        <ProjectsTile />
                    </Col>
                    <Col md={4}>
                        <AssociatesTile />
                    </Col>
                    <Col md={4}>
                        <CertifiedAssociatesTile />
                    </Col>
                </Row>

                <Row style={{marginTop:"35px"}}>
                    <Col md={4}>
                        <Row>
                            <Col md={12}>
                                <RecentlyAddedProjectsComponent />
                            </Col>
                        </Row>
                        <Row style={{marginTop:"25"}}>
                            <Col md={12} >
                                <ResourceRequirementComponent />
                            </Col>
                        </Row>
                    </Col>
                    <Col md={8}>
                        <ChartComponent />
                    </Col>
                </Row>
                


            </Container>

        )
    }
}