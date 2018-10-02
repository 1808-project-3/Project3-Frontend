import * as React from 'react';
import {Col, Container, Row} from 'reactstrap';
import SkillComponent from './skills/skills.component';
import CertificationsComponent from './certifications/certifications.component';

export default class ChartComponent  extends React.Component {
    
    // displays total number of associates in db
    // clicking this page opens the associates list page

    public render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col md={12}>
                            <h3>Chart Component</h3>
                        </Col>
                    </Row>
                    <Row>
                        
                        <SkillComponent/>
                        <CertificationsComponent/>
                        
                    </Row>
                </Container>
                
            </div>
        )
    }
}