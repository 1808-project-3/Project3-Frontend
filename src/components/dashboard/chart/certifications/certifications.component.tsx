import * as React from 'react';
import {Col, Container, Row} from 'reactstrap';
import SelectedCertificationTableComponent from './selected-certification-table.component';
import CertificationsDoughnutComponent from './certifications-doughnut.component';






export default class CertificationsComponent extends React.Component {
    public render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col md={12}>
                            <h3>Projects</h3>
                        </Col>
                        <SelectedCertificationTableComponent/>
                        <CertificationsDoughnutComponent/>
                    </Row>
                    
                </Container>
            
            </div>
        )
    }

}
