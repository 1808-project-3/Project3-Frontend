import * as React from 'react';
import DatePicker from 'react-date-picker';
import { IoMdAddCircleOutline, IoMdCalendar } from 'react-icons/io';
import { connect } from 'react-redux';
import { CardHeader, Col, Container, CustomInput, Form, FormGroup } from 'reactstrap';
import Button from 'reactstrap/lib/Button';
import Card from 'reactstrap/lib/Card';
import Input from 'reactstrap/lib/Input';
import Label from 'reactstrap/lib/Label';
import Row from 'reactstrap/lib/Row';
import { ClosablePill } from './closable-pill.component';

class AddSkillsComponent extends React.Component<any, {}> {

    public state = {
        date: new Date(),
    }

    public onChange = (date: Date) => this.setState({ date })

    public render() {

        return (
            <>
                <Form className="pb-3">
                    <Container>
                        <Row>
                            <Col className="border-col-right pr-5 mr-5 pb-5">
                                <FormGroup row>
                                    <Label for="associateId" className="font-weight-bold" lg={4}>ASSOCIATE ID</Label>
                                    <Col lg={8} className="my-auto">
                                        <Input type="text" name="associateId" id="" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="associateName" className="font-weight-bold" lg={4}>ASSOCIATE NAME</Label>
                                    <Col lg={8} className="my-auto">
                                        <Input type="text" name="associateName" id="" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="aopCertified" lg={4} className="font-weight-bold">AOP CERTIFIED</Label>
                                    <Col lg={8} className="my-auto">
                                        <CustomInput type="radio" id="aop-certified-yes" name="aopCertified" className="d-inline-block pr-4" label="YES" required />
                                        <CustomInput type="radio" id="aop-certified-no" name="aopCertified" className="d-inline-block" label="NO" required />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="skillsGroup" lg={4} className="font-weight-bold">SKILLS - GROUP</Label>
                                    <Col lg={8} className="my-auto">
                                        <Row>
                                            <Col lg={4}>
                                                <CustomInput type="checkbox" id="skills-group-ui-dev" name="skillsGroup" className="pr-4" label="UI/Dev" required />
                                                <CustomInput type="checkbox" id="skills-group-wcm" name="skillsGroup" className="pr-4" label="WCM" required />
                                            </Col>
                                            <Col lg={4}>
                                                <CustomInput type="checkbox" id="skills-group-mobility" name="skillsGroup" className="pr-4" label="Mobility" required />
                                                <CustomInput type="checkbox" id="skills-group-design" name="skillsGroup" className="pr-4" label="Design" required />
                                            </Col>
                                            <Col lg={4}>
                                                <CustomInput type="checkbox" id="skills-group-fullstack" name="skillsGroup" className="pr-4" label="Fullstack" required />
                                                <CustomInput type="checkbox" id="skills-group-ecm-ccm" name="skillsGroup" className="" label="ECM/CCM" required />
                                            </Col>
                                        </Row>
                                    </Col>
                                </FormGroup>
                                <FormGroup>
                                    <Row>
                                        <Col className="p-0" lg={{ size: 8, offset: 4 }}>
                                            <Card>
                                                <CardHeader className="p-3">
                                                    <Row>
                                                        {['iOS', 'Android', 'React Native'].map((each, index) => {
                                                            return (
                                                                <Col key={index} lg={4}>
                                                                    <CustomInput type="checkbox" id={"skills-group-fullstack" + each} name="skills" className="pr-4" label={each} required />
                                                                </Col>
                                                            )
                                                        })}
                                                    </Row>
                                                </CardHeader>
                                            </Card>
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="" lg={4} className="font-weight-bold">CERTIFICATIONS, IF ANY</Label>
                                    <Col lg={8} className="my-auto">
                                        <Input type="text" name="certifications" id="" />
                                    </Col>
                                </FormGroup>
                                <Row>
                                    <Col lg={{ size: 8, offset: 4 }}>
                                        <ClosablePill text="Adobe Digital Learning" color="secondary" onClose={() => console.log("CLICKED")} />
                                    </Col>
                                </Row>
                            </Col>
                            <Col className="pl-0">
                                <FormGroup row>
                                    <Label for="" lg={4} className="font-weight-bold"> CUSTOMER NAME</Label>
                                    <Col lg={8} className="my-auto">
                                        <Input type="text" name="customerName" id="" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="" lg={4} className="font-weight-bold">PROJECT ID</Label>
                                    <Col lg={8} className="my-auto">
                                        <Input type="text" name="projectId" id="" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="" lg={4} className="font-weight-bold"> PROJECT NAME</Label>
                                    <Col lg={8} className="my-auto">
                                        <Input type="text" name="projectName" id="" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="" lg={4} className="font-weight-bold">GRADE</Label>
                                    <Col lg={8} className="my-auto">
                                        <Input type="text" name="grade" id="" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="" lg={4} className="font-weight-bold">COMPETENCY TAGGING</Label>
                                    <Col lg={8} className="my-auto">
                                        <Input type="select" name="competencyTagging" id="" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="" lg={4} className="font-weight-bold">DURATION</Label>
                                    <Col lg={8} className="my-auto">
                                        <div className="d-flex justify-content-between">
                                            <DatePicker
                                                onChange={this.onChange}
                                                value={undefined}
                                                calendarIcon={<IoMdCalendar />}
                                                clearIcon={null as any}
                                            />
                                            <span>To</span>
                                            <DatePicker
                                                onChange={this.onChange}
                                                value={undefined}
                                                calendarIcon={<IoMdCalendar />}
                                                clearIcon={null as any}
                                            />
                                        </div>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="" lg={4} className="font-weight-bold">HCM SUPERVISOR ID</Label>
                                    <Col lg={8} className="my-auto">
                                        <Input type="text" name="supervisorId" id="" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="" lg={4} className="font-weight-bold">HCM SUPERVISOR NAME</Label>
                                    <Col lg={8} className="my-auto">
                                        <Input type="text" name="supervisorName" id="" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="" lg={4} className="font-weight-bold">LOCATION</Label>
                                    <Col lg={8} className="my-auto">
                                        <Input type="text" name="location" id="" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="" lg={4} className="font-weight-bold">ATTACHMENTS (RESUME)</Label>
                                    <Col lg={8} className="my-auto">
                                        <Label className="btn btn-secondary mb-0">
                                            <small>UPLOAD RESUME</small><Input type="file" accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.pdf" name="attachments" id="" hidden />
                                        </Label>
                                    </Col>
                                </FormGroup>
                                <Row>
                                    <Col lg={{ size: 8, offset: 4 }}>
                                        {["Doc Name 01", "Doc Name 02", "Doc Name 03"].map((text, index) =><ClosablePill className="mr-3 mt-2" key={index} text={text} color="secondary" onClose={() => console.log("CLOSED")} />)}
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <hr className="col-12" />
                        <Container>
                            <Row>
                                <Button color="secondary" className="ml-auto px-4" disabled><small>CANCEL</small></Button>
                                <Button color="secondary" className="ml-4 px-3"><IoMdAddCircleOutline /><small className="ml-2">ADD USER</small></Button>
                            </Row>
                        </Container>
                    </Container>
                </Form>
            </>
        );
    }
}

export default connect()(AddSkillsComponent);