import * as React from 'react';
import { Col, Container, Row,Button } from 'reactstrap';
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
                    </Col>

                </Row>
                <Row>
                    <AssociatesTile/>
                    <CertifiedAssociatesTile/>
                    <ProjectsTile/>
                    <Button>Add Profile</Button>
                    {/* <DashboardTilesContainer /> */}
                </Row>
                <Row>
                    <ChartComponent />

                </Row>
            </Container>

        )
    }
}