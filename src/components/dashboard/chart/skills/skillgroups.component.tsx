import * as React from 'react';
import {Col, Container, Row, Card} from 'reactstrap';
import { Link } from 'react-router-dom';




export default class SkillGroupComponent extends React.Component {
    public render() {
        return (
            <div style={{marginTop: '10px'}}>
                <Container>
                    <Row>
                        <Col md={6}>
                            <p style={{marginLeft: "10px"}}>Skill Group</p>
                        </Col>
                        <Col md={6} style={{display: "flex", justifyContent: "flex-end"}}>
                            <Link to="" style={{marginRight: "30px"}}>View All</Link>
                        </Col>
                    </Row>
                    <div className="skillgroup-cards-container">
                        <Row>
                            <Col sm="3">
                                <Card className="skillgroup-skill-card">
                                    <div className="skillgroup-skill-card-content">
                                        <p className="skill-card-num-associates">12</p>
                                        <p className="skill-card-name">Associates In <strong>Skill Name</strong></p>
                                    </div>
                                </Card>
                            </Col>
                            <Col sm="3">
                                <Card className="skillgroup-skill-card">
                                    <div className="skillgroup-skill-card-content">
                                        <p className="skill-card-num-associates">13</p>
                                        <p className="skill-card-name">Associates In <strong>Skill Name</strong></p>
                                    </div>
                                </Card>
                            </Col>
                            <Col sm="3">
                                <Card className="skillgroup-skill-card">
                                    <div className="skillgroup-skill-card-content">
                                        <p className="skill-card-num-associates">14</p>
                                        <p className="skill-card-name">Associates In <strong>Skill Name</strong></p>
                                    </div>
                                </Card>
                            </Col>
                            <Col sm="3">
                                <Card className="skillgroup-skill-card">
                                    <div className="skillgroup-skill-card-content">
                                        <p className="skill-card-num-associates">15</p>
                                        <p className="skill-card-name">Associates In <strong>Skill Name</strong></p>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                        <Row style={{marginTop: "0.1%"}}>
                            <Col sm="3">
                                <Card className="skillgroup-skill-card">
                                    <div className="skillgroup-skill-card-content">
                                        <p className="skill-card-num-associates">12</p>
                                        <p className="skill-card-name">Associates In <strong>Skill Name</strong></p>
                                    </div>
                                </Card>
                            </Col>
                            <Col sm="3">
                                <Card className="skillgroup-skill-card">
                                    <div className="skillgroup-skill-card-content">
                                        <p className="skill-card-num-associates">13</p>
                                        <p className="skill-card-name">Associates In <strong>Skill Name</strong></p>
                                    </div>
                                </Card>
                            </Col>
                            <Col sm="3">
                                <Card className="skillgroup-skill-card">
                                    <div className="skillgroup-skill-card-content">
                                        <p className="skill-card-num-associates">14</p>
                                        <p className="skill-card-name">Associates In <strong>Skill Name</strong></p>
                                    </div>
                                </Card>
                            </Col>
                            <Col sm="3">
                                <Card className="skillgroup-skill-card">
                                    <div className="skillgroup-skill-card-content">
                                        <p className="skill-card-num-associates">15</p>
                                        <p className="skill-card-name">Associates In <strong>Skill Name</strong></p>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </div>                    
                </Container>
            
            </div>
        )
    }

}
