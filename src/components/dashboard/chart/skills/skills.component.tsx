import * as React from 'react';
import {Container, Row} from 'reactstrap';
import SkillDoughnutComponent from './skills-doughnut.component';
import SkillGroupComponent from './skillgroups.component';





export default class SkillComponent extends React.Component {
    public render() {
        return (
            <div>
                <Container>
                    <Row>
                        <SkillDoughnutComponent/>
                        <SkillGroupComponent/>
                    </Row>
                    
                </Container>
        
            </div>
        )
    }

}
