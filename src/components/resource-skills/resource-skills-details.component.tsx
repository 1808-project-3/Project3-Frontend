import * as React from 'react';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { TiDownload } from 'react-icons/ti';
import { CardBody, Container } from 'reactstrap';
import Button from 'reactstrap/lib/Button';
import Card from 'reactstrap/lib/Card';
import CardHeader from 'reactstrap/lib/CardHeader';
import Col from 'reactstrap/lib/Col';
import Row from 'reactstrap/lib/Row';

interface IProps {
    filler: any
}

export const ResourceSkillsDetail: React.StatelessComponent<IProps> = (props) => {
    return (
        <Container>
            <Card className="w-100 mb-4">
                <CardHeader className="font-weight-bold bg-white">
                    SKILL DETAILS
                </CardHeader>
                <CardBody>
                    <Row tag="dl">
                        <Col sm={6}>
                            <Row>
                                <Col tag="dt" xl={4}>ASSOCIATE ID</Col>
                                <Col tag="dd" xl={8}>463967</Col>
                            </Row>
                            <Row>
                                <Col tag="dt" xl={4}>ASSOCIATE NAME</Col>
                                <Col tag="dd" xl={8}>JOHN MARK</Col>
                            </Row>
                            <Row>
                                <Col tag="dt" xl={4}>AOP CERTIFIED</Col>
                                <Col tag="dd" xl={8}>YES</Col>
                            </Row>
                            <Row>
                                <Col tag="dt" xl={4}>SKILLS - GROUP</Col>
                                <Col tag="dd" xl={8}>iOS, Android</Col>
                            </Row>
                            <Row>
                                <Col tag="dt" xl={4}>CERTIFICATIONS, IF ANY</Col>
                                <Col tag="dd" xl={8}>Certification Name</Col>
                            </Row>
                            <Row>
                                <Col tag="dt" xl={4}>CUSTOMER NAME</Col>
                                <Col tag="dd" xl={8}>BANKING CUSTOMER</Col>
                            </Row>
                            <Row>
                                <Col tag="dt" xl={4}>PROJECT ID</Col>
                                <Col tag="dd" xl={8}>0000234098221</Col>
                            </Row>
                            <Row>
                                <Col tag="dt" xl={4}>PROJECT NAME</Col>
                                <Col tag="dd" xl={8}>PAYMENT PORTAL</Col>
                            </Row>
                        </Col>
                        <Col sm={6}>
                            <Row>
                                <Col tag="dt" xl={4}>GRADE</Col>
                                <Col tag="dd" xl={8}>M</Col>
                            </Row>
                            <Row>
                                <Col tag="dt" xl={4}>COMPETENCY TAGGING</Col>
                                <Col tag="dd" xl={8}>DIGITAL BUSINESS</Col>
                            </Row>
                            <Row>
                                <Col tag="dt" xl={4}>DATE OF JOINING</Col>
                                <Col tag="dd" xl={8}>24/08/2018</Col>
                            </Row>
                            <Row>
                                <Col tag="dt" xl={4}>HCM SUPERVISOR ID</Col>
                                <Col tag="dd" xl={8}>219898</Col>
                            </Row>
                            <Row>
                                <Col tag="dt" xl={4}>HCM SUPERVISOR NAME</Col>
                                <Col tag="dd" xl={8}>JOHN ANDERSON</Col>
                            </Row>
                            <Row>
                                <Col tag="dt" xl={4}>LOCATION</Col>
                                <Col tag="dd" xl={8}>ILLINOIS</Col>
                            </Row>
                            <Row>
                                <Col tag="dt" xl={4}>RESUME DOCUMENT</Col>
                                <Col tag="dd" xl={8}><span className="mr-3">RESUME DOCUMENT.DOCX</span><TiDownload /></Col>
                            </Row>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
            <Row>
                <Col>
                    <div className="d-flex justify-content-end">
                        <Button color="secondary" className="ml-auto px-5" disabled><small>EDIT</small></Button>
                        <Button color="secondary" className="ml-4 px-4"><IoMdAddCircleOutline /><small className="ml-2">CONFIRM</small></Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}