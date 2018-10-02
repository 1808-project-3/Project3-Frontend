import * as React from 'react';
import {Container, Row} from 'reactstrap';
import SelectedCertificationTableComponent from './selected-certification-table.component';
import CertificationsDoughnutComponent from './certifications-doughnut.component';






export default class CertificationsComponent extends React.Component {
    public render() {
        return (
            <div>
                <Container>
                    <Row>
                        <SelectedCertificationTableComponent/>
                        <CertificationsDoughnutComponent/>
                    </Row>
                    
                </Container>
            
            </div>
        )
    }

}
