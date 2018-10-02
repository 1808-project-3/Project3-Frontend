import * as React from 'react';
import {Col, Container, Row, Button } from 'reactstrap';
import ProjectsTile from './dashboard-tile-projects.component';
import AssociatesTile from './dashboard-tile-associates';
import CertifiedAssociatesTile from './dashboard-tile-certified.component';

export default class DashboardTilesContainer extends React.Component {

    public render() {
        return (
            <Container>
                <Row>
                    <Col md={12}>
                        <h3>Tile Container</h3>
                    </Col>
                </Row>
                <Row>
                    <ProjectsTile />
                    <AssociatesTile />
                    <CertifiedAssociatesTile />
                    <Button>Add Profile</Button>
                </Row>
            </Container>

        )
    }
}