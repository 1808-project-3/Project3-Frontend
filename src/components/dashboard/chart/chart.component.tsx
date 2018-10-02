import * as React from 'react';
import {Card, Container, Row,TabContent,TabPane,Nav,NavItem,NavLink} from 'reactstrap';
import classnames from 'classnames';
import SkillDoughnutComponent from './skills/skills-doughnut.component';
import SkillGroupComponent from './skills/skillgroups.component';
import SelectedCertificationTableComponent from './certifications/selected-certification-table.component';
import CertificationsDoughnutComponent from './certifications/certifications-doughnut.component';



export default class ChartComponent  extends React.Component<any,any> {
    
    // displays total number of associates in db
    // clicking this page opens the associates list page

    constructor(props:any) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          activeTab: '1'
        };
      }
    
      public toggle(tab:any) {
        if (this.state.activeTab !==tab ) {
          this.setState({
            activeTab: tab
          });
        }
      }

    public render() {
        return (
            <Container>
                <Card>
                    <Row>
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }}
                            >
                            Tab1
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }}
                            >
                            Tab2
                            </NavLink>
                        </NavItem>
                        </Nav>   
                    </Row>
                    <Row>
                        <TabContent activeTab={this.state.activeTab}>
                            <TabPane tabId="1">
                                <Row md={12}>
                                    <SkillDoughnutComponent />
                                </Row>
                                <Row>
                                    <SkillGroupComponent/>
                                </Row>
                                

                            </TabPane>
                            <TabPane tabId="2">
                                <Row md={12}>
                                    <CertificationsDoughnutComponent/>                    
                                </Row>
                                <Row>
                                    <SelectedCertificationTableComponent/>
                                </Row>
                            </TabPane>

                        </TabContent>                        
                    </Row> 
                </Card>
            </Container>
        )
    }
}