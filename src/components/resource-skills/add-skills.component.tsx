import * as React from 'react';
import DatePicker from 'react-date-picker';
import { IoMdAddCircleOutline, IoMdCalendar } from 'react-icons/io';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { CardHeader, Col, Container, CustomInput, Form, FormGroup } from 'reactstrap';
import Button from 'reactstrap/lib/Button';
import Card from 'reactstrap/lib/Card';
import Collapse from 'reactstrap/lib/Collapse';
import Input from 'reactstrap/lib/Input';
import Label from 'reactstrap/lib/Label';
import Row from 'reactstrap/lib/Row';
import * as addSkillsActions from '../../actions/resource-skills/add-skills.actions';
import SkillGroups from '../../assets/skill-groups.json';
import { Group } from '../../models/Group';
import { Skill } from '../../models/Skill';
import { IAddSkillsState, IState } from '../../reducers';
import { ClosablePill } from './closable-pill.component';


interface IProps extends RouteComponentProps<{}>, IAddSkillsState {
    fetchCompetencyTaggingList: () => void
    fetchGradeList: () => void
    fetchLocationList: () => void
    updateResource: (event: any) => void
    updateResourceSkills: (skill: Skill) => void
    addResumes: (files: FileList | null) => void
    removeResume: (resumeId: number) => void
    toggleSkillGroup: (event: any) => void
}

class AddSkillsComponent extends React.Component<IProps, {}> {
    public constructor(props: any) {
        super(props);
        this.props.fetchCompetencyTaggingList();
        this.props.fetchGradeList();
        this.props.fetchLocationList();
    }

    public render() {
        const { resource, skillGroupIds } = this.props;
        const user = resource.user;
        const validAssociateName = user.firstName && user.lastName;
        const associateName = `${user.firstName} ${user.lastName}`
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
                                        <Input value={resource.user.assocId ? resource.user.assocId : ''} onChange={e => this.props.updateResource(e.target)} type="text" name="associateId" id="inputAssociateId" required />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="inputAssociateName" className="font-weight-bold" lg={4}>ASSOCIATE NAME</Label>
                                    <Col lg={8} className="my-auto">
                                        <Input value={validAssociateName ? associateName : ''} onChange={e => this.props.updateResource(e.target)} type="text" name="associateName" id="inputAssociateName" placeholder="Autofills with valid Associate ID" disabled />
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
                                        <Container>
                                            <Row>
                                                {SkillGroups.map((group: Group) => {
                                                    return <CustomInput defaultChecked={this.props.skillGroupIds.indexOf(group.groupId) > -1} onChange={e => this.props.toggleSkillGroup(e.target)} key={"group-" + group.groupId} type="checkbox" id={"skills-group-" + group.groupId} name="skillsGroup" className="pr-4" label={group.name} />
                                                })}
                                            </Row>
                                        </Container>
                                    </Col>
                                </FormGroup>
                                <Collapse isOpen={skills.length > 0}>
                                    <FormGroup>
                                        <Row>
                                            <Col className="p-0" lg={{ size: 8, offset: 4 }}>
                                                <Card>
                                                    <CardHeader className="p-3">
                                                        <Container>
                                                            <Row>
                                                                {skills.map((skill: Skill) => {
                                                                    return (
                                                                        <CustomInput defaultChecked={resource.skills.some(selectedSkill => selectedSkill.skillId === skill.skillId)} key={"skills-" + skill.skillId} onChange={() => this.props.updateResourceSkills(skill)} type="checkbox" id={"skills-" + skill.skillId} name="skills" className="pr-4" label={skill.name} />
                                                                    )
                                                                })}
                                                            </Row>
                                                        </Container>
                                                    </CardHeader>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                </Collapse>
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
                                        <Input onChange={e => this.props.updateResource(e.target)} type="text" name="customerName" id="inputCustomerName" required />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="inputProjectId" lg={4} className="font-weight-bold">PROJECT ID</Label>
                                    <Col lg={8} className="my-auto">
                                        <Input onChange={e => this.props.updateResource(e.target)} type="text" name="projectId" id="inputProjectId" required />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="inputProjectName" lg={4} className="font-weight-bold">PROJECT NAME</Label>
                                    <Col lg={8} className="my-auto">
                                        <Input onChange={e => this.props.updateResource(e.target)} type="text" name="projectName" id="inputProjectName" required />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="inputGrade" lg={4} className="font-weight-bold">GRADE</Label>
                                    <Col lg={8} className="my-auto">
                                        <Input onChange={e => this.props.updateResource(e.target)} type="select" name="grade" id="inputGrade" required>
                                            <option value="" hidden></option>
                                            {this.props.listOfGrades.map((grade: string) => {
                                                return (
                                                    <option value={grade} key={grade}>{grade}</option>
                                                )
                                            })}
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="inputCompetencyTagging" lg={4} className="font-weight-bold">COMPETENCY TAGGING</Label>
                                    <Col lg={8} className="my-auto">
                                        <Input onChange={e => this.props.updateResource(e.target)} type="select" name="competencyTagging" id="inputCompetencyTagging" required >
                                            <option value="" hidden></option>
                                            {this.props.listOfCompetencyTaggings.map((tag: string) => {
                                                return (
                                                    <option value={tag} key={tag}>{tag}</option>
                                                )
                                            })}
                                        </Input>
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
                                                maxDate={resource.project.endDate ? resource.project.endDate : undefined}
                                                disabled={this.props.dateTbd}
                                                required
                                            />
                                            <span>To</span>
                                            <DatePicker
                                                onChange={(date) => this.props.updateResource({ name: "endDate", value: date })}
                                                value={resource.project && resource.project.endDate}
                                                calendarIcon={<IoMdCalendar />}
                                                clearIcon={null as any}
                                                minDate={resource.project.startDate ? resource.project.startDate : undefined}
                                                disabled={this.props.dateTbd}
                                                required
                                            />
                                        </div>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col lg={{ size: 8, offset: 4 }}>
                                        <CustomInput onChange={e => this.props.updateResource(e.target)} type="checkbox" id={"date-tbd"} name="date-tbd" label={"To be decided"} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="inputSupervisorId" lg={4} className="font-weight-bold">HCM SUPERVISOR ID</Label>
                                    <Col lg={8} className="my-auto">
                                        <Input onChange={e => this.props.updateResource(e.target)} type="text" name="supervisorId" id="inputSupervisorId" required />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="inputSupervisorName" lg={4} className="font-weight-bold">HCM SUPERVISOR NAME</Label>
                                    <Col lg={8} className="my-auto">
                                        <Input onChange={e => this.props.updateResource(e.target)} type="text" name="supervisorName" id="inputSupervisorName" required />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="inputLocation" lg={4} className="font-weight-bold">LOCATION</Label>
                                    <Col lg={8} className="my-auto">
                                        <Input onChange={e => this.props.updateResource(e.target)} type="select" name="location" id="inputLocation" required>
                                            <option value="" hidden></option>
                                            {this.props.listOfLocations.map((location: string) => {
                                                return (
                                                    <option value={location} key={location}>{location}</option>
                                                )
                                            })}
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="inputResumes" lg={4} className="font-weight-bold">ATTACHMENTS (RESUME)</Label>
                                    <Col lg={8} className="my-auto">
                                        <Label className="btn btn-secondary mb-0">
                                            <small>UPLOAD RESUME</small><Input onChange={e => this.props.addResumes(e.target.files)} multiple type="file" accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.pdf" name="resumes" id="inputResumes" hidden />
                                        </Label>
                                    </Col>
                                </FormGroup>
                                <Row>
                                    <Col lg={{ size: 8, offset: 4 }}>
                                        {resource.resumes.map((resume) => <ClosablePill className="mr-3 mt-2" key={resume.resumeId} text={resume.fileName} color="secondary" onClose={() => this.props.removeResume(resume.resumeId)} />)}
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
    addResumes: addSkillsActions.addResumes,
    fetchCompetencyTaggingList: addSkillsActions.fetchCompetencyTaggingList,
    fetchGradeList: addSkillsActions.fetchGradeList,
    fetchLocationList: addSkillsActions.fetchLocationList,
    removeResume: addSkillsActions.removeResume,
    toggleSkillGroup: addSkillsActions.toggleSkillGroup,
    updateResource: addSkillsActions.updateResource,
    updateResourceSkills: addSkillsActions.updateResourceSkills

}

export default connect(mapStateToProps, mapDispatchToProps)(AddSkillsComponent);