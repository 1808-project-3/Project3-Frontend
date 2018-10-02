import * as React from 'react';
import {Col, Container, Row,TabContent,TabPane,Nav,NavItem,NavLink} from 'reactstrap';
import SkillComponent from './skills/skills.component';
import CertificationsComponent from './certifications/certifications.component';
import classnames from 'classnames';



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
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                            <Row>
                                <Col sm={12}>
                                    <h3>active tab 1</h3>
                                </Col>
                            </Row>

                        </TabPane>
                        <TabPane tabId="2">
                            <Row>
                                <Col sm={12}>
                                    <h3>active tab2 </h3>
                                </Col>
                            </Row>
                        
                        </TabPane>

                    </TabContent>
                </Row>
                </Container>
                
            </div>
        )
    }
}