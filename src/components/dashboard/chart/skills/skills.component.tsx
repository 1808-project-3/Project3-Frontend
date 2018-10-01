import * as React from 'react';
import {Col, Container, Row, Button} from 'reactstrap';
import SkillDoughnutComponent from './skills-doughnut.component';
import SkillGroupComponent from './skillgroups.component';





export default class SkillComponent extends React.Component {
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
                        <SkillDoughnutComponent/>
                        <SkillGroupComponent/>
                    </Row>
                    
                </Container>
        
            </div>
        )
    }

}
