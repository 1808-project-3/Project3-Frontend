import * as React from 'react';
import { Col, Container, Row,Button } from 'reactstrap';
// import DashboardTilesContainer from './dashboard-tiles/dashboard-tiles.component';
import ChartComponent from './chart/chart.component';
import AssociatesTile from './dashboard-tiles/dashboard-tile-associates';
import CertifiedAssociatesTile from './dashboard-tiles/dashboard-tile-certified.component';
import ProjectsTile from './dashboard-tiles/dashboard-tile-projects.component';
import RecentlyAddedProjectsComponent from './project-cards/recently-added-projects';
import ResourceRequirementComponent from './project-cards/resource-requirement';
import {MdSend} from 'react-icons/md';


export default class TalentDashboard extends React.Component<any,any> {


    public render() {
        return (
            <Container>   
                <Row>
                    <Col md={3}>
                        <ProjectsTile />
                    </Col>
                    <Col md={3}>
                        <AssociatesTile />
                    </Col>
                    <Col md={3}>
                        <CertifiedAssociatesTile />
                    </Col>
                    <Col md={3} className="three-card-button-col">
                     <Button className="three-card-button" onClick={this.props.history.push('/add-skills')}><MdSend size={45} color={"#36A2EB"}/>ADD PROFILE</Button>
                    </Col>
                </Row>

                <Row style={{marginTop:"35px"}}>
                    <Col md={3}>
                        <Row>
                            <Col md={12}>
                                <RecentlyAddedProjectsComponent />
                            </Col>
                        </Row>
                        <Row style={{marginTop:"25px"}}>
                            <Col md={12} >
                                <ResourceRequirementComponent />
                            </Col>
                        </Row>
                    </Col>
                    <Col md={9}>
                        <ChartComponent />
                    </Col>
                </Row>
            </Container>

        )
    }
}