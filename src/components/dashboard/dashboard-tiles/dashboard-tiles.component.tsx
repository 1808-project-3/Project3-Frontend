import * as React from 'react';
import {Col, Container, Row} from 'reactstrap';
import ProjectsTile from './dashboard-tile-projects.component';
import AssociatesTile from './dashboard-tile-associates';
import CertifiedAssociatesTile from './dashboard-tile-certified.component';

export default class DashboardTilesContainer extends React.Component {

    public render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col md={12}>
                            <h3>Projects</h3>
                        </Col>
                    </Row>
                    <Row>
                        <ProjectsTile/>
                        <AssociatesTile/>
                        <CertifiedAssociatesTile/>
                    </Row>
                </Container>
                {/* needs add profile button*/}
            </div>
        )
    }
}