import * as React from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, Col, CustomInput } from 'reactstrap';
import Row from 'reactstrap/lib/Row';
import Label from 'reactstrap/lib/Label';
import Input from 'reactstrap/lib/Input';
import Button from 'reactstrap/lib/Button';
import { IoMdAddCircleOutline } from 'react-icons/io';

class AddSkillsComponent extends React.Component<any, {}> {

    public render() {

        return (
            <>
                <Form className="w-100">
                    <Row>
                        <Col className="border-col-right">
                            <FormGroup row>
                                <Label for="associateId" className="font-weight-bold" sm={4}>ASSOCIATE ID</Label>
                                <Col sm={8}>
                                    <Input type="text" name="associateId" id="" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="associateName" className="font-weight-bold" sm={4}>ASSOCIATE NAME</Label>
                                <Col sm={8}>
                                    <Input type="text" name="associateName" id="" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="aopCertified" sm={4} className="font-weight-bold">AOP CERTIFIED</Label>
                                <Col sm={8}>
                                    <CustomInput type="radio" id="aop-certified-yes" name="aopCertified" className="d-inline-block pr-4" label="YES" required />
                                    <CustomInput type="radio" id="aop-certified-no" name="aopCertified" className="d-inline-block" label="NO" required />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="skillsGroup" sm={4} className="font-weight-bold">SKILLS - GROUP</Label>
                                <Col sm={8}>
                                    <Row>
                                        <Col>
                                            <CustomInput type="checkbox" id="skills-group-ui-dev" name="skillsGroup" className="pr-4" label="UI/Dev" required />
                                            <CustomInput type="checkbox" id="skills-group-wcm" name="sillsGroup" className="pr-4" label="WCM" required />
                                        </Col>
                                        <Col>
                                            <CustomInput type="checkbox" id="skills-group-mobility" name="skillsGroup" className="pr-4" label="Mobility" required />
                                            <CustomInput type="checkbox" id="skills-group-design" name="skillsGroup" className="pr-4" label="Design" required />
                                        </Col>
                                        <Col>
                                            <CustomInput type="checkbox" id="skills-group-fullstack" name="skillsGroup" className="pr-4" label="Fullstack" required />
                                            <CustomInput type="checkbox" id="skills-group-ecm-ccm" name="skillsGroup" className="" label="ECM/CCM" required />
                                        </Col>
                                    </Row>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="" sm={4} className="font-weight-bold">CERTIFICATIONS, IF ANY</Label>
                                <Col sm={8}>
                                    <Input type="text" name="certifications" id="" />
                                </Col>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup row>
                                <Label for="" sm={4} className="font-weight-bold"> CUSTOMER NAME</Label>
                                <Col sm={8}>
                                    <Input type="text" name="customerName" id="" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="" sm={4} className="font-weight-bold">PROJECT ID</Label>
                                <Col sm={8}>
                                    <Input type="text" name="projectId" id="" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="" sm={4} className="font-weight-bold"> PROJECT NAME</Label>
                                <Col sm={8}>
                                    <Input type="text" name="projectName" id="" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="" sm={4} className="font-weight-bold">GRADE</Label>
                                <Col sm={8}>
                                    <Input type="text" name="grade" id="" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="" sm={4} className="font-weight-bold">COMPETENCY TAGGING</Label>
                                <Col sm={8}>
                                    <Input type="select" name="competencyTagging" id="" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="" sm={4} className="font-weight-bold">DURATION</Label>
                                <Col sm={8}>
                                    <Row>
                                        <Col sm={5}>
                                            <Input type="date" name="duration" id="inputDateFrom" />
                                        </Col>
                                        <Col sm={2}>
                                            <span className="px-2">To</span>
                                        </Col>
                                        <Col sm={5}>
                                            <Input type="date" name="duration" id="inputDateTo" />
                                        </Col>
                                    </Row>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="" sm={4} className="font-weight-bold">HCM SUPERVISOR ID</Label>
                                <Col sm={8}>
                                    <Input type="text" name="supervisorId" id="" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="" sm={4} className="font-weight-bold">HCM SUPERVISOR NAME</Label>
                                <Col sm={8}>
                                    <Input type="text" name="supervisorName" id="" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="" sm={4} className="font-weight-bold">LOCATION</Label>
                                <Col sm={8}>
                                    <Input type="text" name="location" id="" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="" sm={4} className="font-weight-bold">ATTACHMENTS(RESUME)</Label>
                                <Col sm={8}>
                                    <Input type="file" name="attachments" id="" />
                                </Col>
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
                <Row className="w-100">
                    <Button color="secondary" className="ml-auto px-4" disabled><small>CANCEL</small></Button>
                    <Button color="secondary" className="ml-4 px-3"><IoMdAddCircleOutline /><small className="ml-2">ADD USER</small></Button>
                </Row>
            </>
        );
    }
}

export default connect()(AddSkillsComponent);