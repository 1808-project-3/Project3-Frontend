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
import { IAddSkillsState, IState } from '../../reducers';
import { RouteComponentProps } from 'react-router';
import * as addSkillsActions from '../../actions/resource-skills/add-skills.actions';
import SkillGroups from '../../assets/skill-groups.json';
import { Group } from '../../models/Group';
import { Skill } from '../../models/Skill';

interface IProps extends RouteComponentProps<{}>, IAddSkillsState {
    updateResource: (event: any) => void
    updateResourceSkills: (skill: Skill) => void
    toggleSkillGroup: (event: any) => void
}

class AddSkillsComponent extends React.Component<IProps, {}> {
    public render() {
        const { resource, skillGroupIds } = this.props;
        const selectedGroups = SkillGroups.filter((group: Group) => skillGroupIds.indexOf(group.groupId) > -1);
        const skills = selectedGroups.reduce((acc: any, val: any) => {
            const groupSkills = val.skills.map((skill: any) => new Skill({ ...skill, group: new Group(val) }))
            return acc.concat(groupSkills);
        }, []);
        return (
            <>
                <Form className="pb-3">
                    <Container>
                        <Row>
                            <Col className="border-col-right pr-5 mr-5 pb-5">
                                <FormGroup row>
                                    <Label for="inputAssociateId" className="font-weight-bold" lg={4}>ASSOCIATE ID</Label>
                                    <Col lg={8} className="my-auto">
                                        <Input onChange={e => this.props.updateResource(e.target)} type="text" name="associateId" id="inputAssociateId" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="inputAssociateName" className="font-weight-bold" lg={4}>ASSOCIATE NAME</Label>
                                    <Col lg={8} className="my-auto">
                                        <Input onChange={e => this.props.updateResource(e.target)} type="text" name="associateName" id="inputAssociateName" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="aopCertified" lg={4} className="font-weight-bold">AOP CERTIFIED</Label>
                                    <Col lg={8} className="my-auto">
                                        <CustomInput onChange={e => this.props.updateResource(e.target)} defaultChecked={resource.aupCertified} type="radio" id="aop-certified-yes" name="aopCertified" className="d-inline-block pr-4" label="YES" required />
                                        <CustomInput onChange={e => this.props.updateResource(e.target)} defaultChecked={resource.aupCertified !== undefined && !resource.aupCertified} type="radio" id="aop-certified-no" name="aopCertified" className="d-inline-block" label="NO" required />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="skillsGroup" lg={4} className="font-weight-bold">SKILLS - GROUP</Label>
                                    <Col lg={8} className="my-auto">
                                        <Row>
                                            {SkillGroups.map((group: Group) => {
                                                return <CustomInput onChange={e => this.props.toggleSkillGroup(e.target)} key={"group-" + group.groupId} type="checkbox" id={"skills-group-" + group.groupId} name="skillsGroup" className="pr-4" label={group.name} required />
                                            })}
                                        </Row>
                                    </Col>
                                </FormGroup>
                                {skills.length > 0 &&
                                    <FormGroup>
                                        <Row>
                                            <Col className="p-0" lg={{ size: 8, offset: 4 }}>
                                                <Card>
                                                    <CardHeader className="p-3">
                                                        <Row>
                                                            {skills.map((skill: Skill) => {
                                                                return (
                                                                    <Col key={"skills-" + skill.skillId} lg={4}>
                                                                        <CustomInput onChange={() => this.props.updateResourceSkills(skill)} type="checkbox" id={"skills-" + skill.skillId} name="skills" className="pr-4" label={skill.name} required />
                                                                    </Col>
                                                                )
                                                            })}
                                                        </Row>
                                                    </CardHeader>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                }
                                <FormGroup row>
                                    <Label for="inputCertifications" lg={4} className="font-weight-bold">CERTIFICATIONS, IF ANY</Label>
                                    <Col lg={8} className="my-auto">
                                        <Input type="text" name="certifications" id="inputCertifications" />
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
                                    <Label for="inputCustomerName" lg={4} className="font-weight-bold"> CUSTOMER NAME</Label>
                                    <Col lg={8} className="my-auto">
                                        <Input onChange={e => this.props.updateResource(e.target)} type="text" name="customerName" id="inputCustomerName" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="inputProjectId" lg={4} className="font-weight-bold">PROJECT ID</Label>
                                    <Col lg={8} className="my-auto">
                                        <Input onChange={e => this.props.updateResource(e.target)} type="text" name="projectId" id="inputProjectId" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="inputProjectName" lg={4} className="font-weight-bold">PROJECT NAME</Label>
                                    <Col lg={8} className="my-auto">
                                        <Input onChange={e => this.props.updateResource(e.target)} type="text" name="projectName" id="inputProjectName" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="inputGrade" lg={4} className="font-weight-bold">GRADE</Label>
                                    <Col lg={8} className="my-auto">
                                        <Input onChange={e => this.props.updateResource(e.target)} type="text" name="grade" id="inputGrade" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="inputCompetencyTagging" lg={4} className="font-weight-bold">COMPETENCY TAGGING</Label>
                                    <Col lg={8} className="my-auto">
                                        <Input onChange={e => this.props.updateResource(e.target)} type="select" name="competencyTagging" id="inputCompetencyTagging" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="inputDate" lg={4} className="font-weight-bold">DURATION</Label>
                                    <Col lg={8} className="my-auto">
                                        <div className="d-flex justify-content-between">
                                            <DatePicker
                                                onChange={(date) => this.props.updateResource({ name: "startDate", value: date })}
                                                value={resource.project && resource.project.startDate}
                                                calendarIcon={<IoMdCalendar />}
                                                clearIcon={null as any}
                                            />
                                            <span>To</span>
                                            <DatePicker
                                                onChange={(date) => this.props.updateResource({ name: "endDate", value: date })}
                                                value={resource.project && resource.project.endDate}
                                                calendarIcon={<IoMdCalendar />}
                                                clearIcon={null as any}
                                            />
                                        </div>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="inputSupervisorId" lg={4} className="font-weight-bold">HCM SUPERVISOR ID</Label>
                                    <Col lg={8} className="my-auto">
                                        <Input onChange={e => this.props.updateResource(e.target)} type="text" name="supervisorId" id="inputSupervisorId" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="inputSupervisorName" lg={4} className="font-weight-bold">HCM SUPERVISOR NAME</Label>
                                    <Col lg={8} className="my-auto">
                                        <Input onChange={e => this.props.updateResource(e.target)} type="text" name="supervisorName" id="inputSupervisorName" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="inputLocation" lg={4} className="font-weight-bold">LOCATION</Label>
                                    <Col lg={8} className="my-auto">
                                        <Input onChange={e => this.props.updateResource(e.target)} type="text" name="location" id="inputLocation" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="inputResumes" lg={4} className="font-weight-bold">ATTACHMENTS (RESUME)</Label>
                                    <Col lg={8} className="my-auto">
                                        <Label className="btn btn-secondary mb-0">
                                            <small>UPLOAD RESUME</small><Input type="file" accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.pdf" name="resumes" id="inputResumes" hidden />
                                        </Label>
                                    </Col>
                                </FormGroup>
                                <Row>
                                    <Col lg={{ size: 8, offset: 4 }}>
                                        {["Doc Name 01", "Doc Name 02", "Doc Name 03"].map((text, index) => <ClosablePill className="mr-3 mt-2" key={index} text={text} color="secondary" onClose={() => console.log("CLOSED")} />)}
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

const mapStateToProps = (state: IState) => state.addSkills

const mapDispatchToProps = {
    toggleSkillGroup: addSkillsActions.toggleSkillGroup,
    updateResource: addSkillsActions.updateResource,
    updateResourceSkills: addSkillsActions.updateResourceSkills
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSkillsComponent);