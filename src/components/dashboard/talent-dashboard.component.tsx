import * as React from 'react';
import { Col, Container, Row, Button } from 'reactstrap';
// import DashboardTilesContainer from './dashboard-tiles/dashboard-tiles.component';
import ChartComponent from './chart/chart.component';
import AssociatesTile from './dashboard-tiles/dashboard-tile-associates';
import CertifiedAssociatesTile from './dashboard-tiles/dashboard-tile-certified.component';
import ProjectsTile from './dashboard-tiles/dashboard-tile-projects.component';

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
                <Row>
                    <ChartComponent />

                </Row>


            </Container>

        )
    }
}