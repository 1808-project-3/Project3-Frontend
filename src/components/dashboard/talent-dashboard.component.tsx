import * as React from 'react';
import { Col, Container, Row, Button } from 'reactstrap';
import DashboardTilesContainer from './dashboard-tiles/dashboard-tiles.component';
import ChartComponent from './chart/chart.component';

export default class TalentDashboard extends React.Component {

    public render() {
        return (
            <Container>
                <Row>
                    <Col md={12}>
                        <h3>Projects</h3>
                    </Col>
                    <DashboardTilesContainer />

                </Row>
                <Row>
                    <ChartComponent />

                </Row>
                <Button>Add Profile</Button>
            </Container>

        )
    }
}