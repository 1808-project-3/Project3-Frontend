import * as React from 'react';
import {Col, Container, Row, Card} from 'reactstrap';




export default class SkillGroupComponent extends React.Component {
    public render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col md={12}>
                            <h3>Skill Group Component</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="6">
                            <Card body>
                                <h6>12</h6>
                                
                            </Card>
                        </Col>
                    </Row>
                    
                </Container>
            
            </div>
        )
    }

}
