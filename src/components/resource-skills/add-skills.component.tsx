import * as React from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, Col } from 'reactstrap';
import Row from 'reactstrap/lib/Row';
import Label from 'reactstrap/lib/Label';
import Input from 'reactstrap/lib/Input';

class AddSkillsComponent extends React.Component<any, {}> {

    public render(){

        return(
        <>
            <Form>
                <Row>
                    <Col>
                        <FormGroup row>
                            <Label for="associateId">Associate Id</Label>
                            <Col sm={5}>
                                <Input type="text" name="associateId" id="" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="associateName">Associate Name</Label>
                            <Col sm={5}>
                                <Input type="text" name="associateName" id=""/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="">AOP Certified</Label>
                            <Col sm={5} className="justify-content-right">   
                                <div>
                                <Input type="radio" name="certified" id="isCertified"/>
                                <Label for="isCertified">YES</Label>
                                </div>
                                <div>
                                <Input type="radio" name="certified" id="notCertified"/>
                                <Label for="notCertified">NO</Label>
                                </div>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="">Skills-Group</Label>
                            <Col sm={5}>
                                <Input type="checkbox" name="skillGroups" id=""/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="">CERTIFICATIONS, IF ANY</Label>
                            <Col sm={5}>
                                <Input type="text" name="certifications" id=""/>
                            </Col>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup row>
                            <Label for=""> CUSTOMER NAME</Label>
                            <Col sm={5}>
                                <Input type="text" name="customerName" id=""/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="">PROJECT ID</Label>
                            <Col sm={5}>
                                <Input type="text" name="projectId" id="" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for=""> PROJECT NAME</Label>
                            <Col sm={5}>
                                <Input type="text" name="projectName" id=""/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="">GRADE</Label>
                            <Col sm={5}>
                                <Input type="text" name="grade" id=""/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="">COMPETENCY TAGGING</Label>
                            <Col sm={5}>
                                <Input type="select" name="competencyTagging" id=""/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="">DURATION</Label>
                            <Col sm={5}>
                                <Input type="date" name="duration" id=""/> to <Input type="date" name="duration" id=""/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="">HCM SUPERVISOR ID</Label>
                            <Col sm={5}>
                                <Input type="text" name="supervisorId" id=""/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="">HCM SUPERVISOR NAME</Label>
                            <Col sm={5}>
                                <Input type="text" name="supervisorName" id=""/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="">LOCATION</Label>
                            <Col sm={5}>
                                <Input type="text" name="location" id=""/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="">ATTACHMENTS(RESUME)</Label>
                            <Col sm={5}>
                                <Input type="file" name="attachments" id=""/>
                            </Col>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <button type="reset" className="">Cancel</button>
                    <button type="submit" className="">Add User</button>
                </Row>
            </Form>
        </>
        );
    }
}

export default connect()(AddSkillsComponent);