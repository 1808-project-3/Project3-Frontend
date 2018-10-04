import * as React from 'react';
import {Card,Col,  Row,TabContent,TabPane,Nav,NavItem,NavLink} from 'reactstrap';
import classnames from 'classnames';
import SkillDoughnutComponent from './skills/skills-doughnut.component';
// import SkillGroupComponent from './skills/skillgroups.component';
// import SelectedCertificationTableComponent from './certifications/selected-certification-table.component';
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
                <Card>
                    <Row>
                    <Col>
                    <Nav tabs style={{backgroundColor:"#F0EEEE"}}>
                        <NavItem>
                            <NavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }}
                            style={{cursor:'pointer'}}
                            >
                            
                            SKILLS
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }}
                            style={{cursor:'pointer'}}
                            >
                            CERTIFICATIONS
                            </NavLink>
                        </NavItem>
                    </Nav>   
                    </Col>
                    </Row>


                    <Row>
                        <Col>
                        <TabContent activeTab={this.state.activeTab}>

                            <TabPane tabId="1">
                                <Row>
                                    <Col md={12}>
                                        <SkillDoughnutComponent />
                                    </Col>
                                </Row>
                                {/* <Row style={{ marginBottom: '2%'}}>
                                    <Col md={12}>
                                        <SkillGroupComponent />
                                    </Col>
                                </Row>                                 */}
                                

                            </TabPane>


                            <TabPane tabId="2">
                                <Row>
                                    <Col md={12}>
                                    <CertificationsDoughnutComponent/>
                                    </Col>                    
                                </Row>
                            </TabPane>

                        </TabContent>
                        </Col>                        
                    </Row> 
                </Card>
                
            
        )
    }
}