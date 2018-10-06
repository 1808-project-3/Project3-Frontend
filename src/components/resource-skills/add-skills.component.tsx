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
import FormFeedback from 'reactstrap/lib/FormFeedback';
import { Resource } from '../../models/Resource';
import Alert from 'reactstrap/lib/Alert';
import { Grade } from '../../models/Grade';
import { CompetencyTag } from '../../models/CompetencyTag';
import { Location } from '../../models/Location';
import * as Autocomplete from 'react-autocomplete';
import { Certification } from '../../models/Certification';
import Badge from 'reactstrap/lib/Badge';


interface IProps extends RouteComponentProps<{}>, IAddSkillsState {
    fetchAssociate: (assocId: number) => void
    fetchSupervisor: (supId: number) => void
    fetchProject: (projectId: number) => void
    fetchCompetencyTaggingList: () => void
    fetchGradeList: () => void
    fetchLocationList: () => void
    fetchCertificationList: (search: string) => void
    updateCertificationSearch: (search: string) => void
    addCertification: (cert: Certification) => void
    removeCertification: (certId: number) => void
    updateResource: (event: any) => void
    updateResourceSkills: (skill: Skill) => void
    addResumes: (files: FileList | null) => void
    removeResume: (resumeId: number) => void
    toggleSkillGroup: (event: any) => void
    showOrHideProject: (newOrExisting: string) => void
    cancelResource: () => void
    submitResource: (resource: Resource) => void
}

class AddSkillsComponent extends React.Component<IProps, {}> {
    public constructor(props: any) {
        super(props);
        this.props.fetchCompetencyTaggingList();
        this.props.fetchGradeList();
        this.props.fetchLocationList();
    }

    public componentDidUpdate(prevProps: IProps) {
        if (this.props.certificationSearch && this.props.certificationSearch !== prevProps.certificationSearch) {
            this.props.fetchCertificationList(this.props.certificationSearch);
        }
        if (this.props.associateIdInput !== prevProps.associateIdInput) {
            this.props.fetchAssociate(+this.props.associateIdInput);
        }
        if (this.props.supervisorIdInput !== prevProps.supervisorIdInput) {
            this.props.fetchSupervisor(+this.props.supervisorIdInput);
        }
        if (this.props.projectIdInput !== prevProps.projectIdInput && this.props.newOrExistingProject === 'existing') {
            this.props.fetchProject(+this.props.projectIdInput);
        }
    }

    public render() {
        const { resource, skillGroupIds, submitted } = this.props;
        const user = resource.user;
        const validAssociateName = user.firstName && user.lastName;
        const associateName = `${user.firstName} ${user.lastName}`
        const supervisor = resource.project.supervisor;
        const validSupervisorName = supervisor.firstName && supervisor.lastName;
        const supervisorName = `${supervisor.firstName} ${supervisor.lastName}`
        const showDateError = submitted && !((resource.project.startDate && resource.project.endDate) || this.props.dateTbd);
        const newProject = this.props.newOrExistingProject === 'new'
        const existingProject = this.props.newOrExistingProject === 'existing';
        const noProject = this.props.newOrExistingProject === 'none';
        let dateErrorMessage = 'Please select a project start and end date or press to be decided';
        if (showDateError) {
            if (resource.project.startDate) {
                dateErrorMessage = 'Please select a project end date or press to be decided';
            } else if (resource.project.endDate) {
                dateErrorMessage = 'Please select a project start date or press to be decided';
            }
        }
        const selectedGroups = SkillGroups.filter((group: Group) => skillGroupIds.indexOf(group.groupId) > -1);
        const skills = selectedGroups.reduce((acc: any, val: any) => {
            const groupSkills = val.skills.map((skill: any) => new Skill({ ...skill, group: new Group(val) }))
            return acc.concat(groupSkills);
        }, []);
        return (
            <>
                {submitted &&
                    <Alert className="mx-4" color="danger">
                        <span>There was a problem submitting the resource. You'll find more details highlighted below.</span>
                    </Alert>
                }
                <Form>
                    <Container>
                        <Row>
                            <Col className="border-col-right pr-5 mr-5-sm pb-5">
                                <FormGroup row>
                                    <Label for="inputAssociateId" className="font-weight-bold" lg={4}>ASSOCIATE ID</Label>
                                    <Col lg={8} className="my-auto">
                                        <Input invalid={submitted && !resource.user.assocId} value={this.props.associateIdInput ? this.props.associateIdInput : ''} onChange={e => this.props.updateResource(e.target)} type="text" name="associateId" id="inputAssociateId" required autoFocus />
                                        <FormFeedback>Could not find user with this Associate ID</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="inputAssociateName" className="font-weight-bold" lg={4}>ASSOCIATE NAME</Label>
                                    <Col lg={8} className="my-auto">
                                        <Input value={validAssociateName ? associateName : ''} onChange={e => this.props.updateResource(e.target)} type="text" name="associateName" id="inputAssociateName" placeholder="Autofills with valid Associate ID" readOnly />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="aopCertified" lg={4} className="font-weight-bold">AOP CERTIFIED</Label>
                                    <Col lg={8} className="my-auto">
                                        <CustomInput invalid={submitted && resource.aupCertified === undefined} onChange={e => this.props.updateResource(e.target)} defaultChecked={resource.aupCertified} type="radio" id="aop-certified-yes" name="aopCertified" className="d-inline-block pr-4" label="YES" required />
                                        <CustomInput invalid={submitted && resource.aupCertified === undefined} onChange={e => this.props.updateResource(e.target)} defaultChecked={resource.aupCertified !== undefined && !resource.aupCertified} type="radio" id="aop-certified-no" name="aopCertified" className="d-inline-block" label="NO" required />
                                        {submitted && resource.aupCertified === undefined && <FormFeedback className="d-inline-block">Please choose either yes or no</FormFeedback>}
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="skillsGroup" lg={4} className="font-weight-bold">SKILLS - GROUP</Label>
                                    <Col lg={8} className="my-auto">
                                        <Container>
                                            <Row>
                                                {SkillGroups.map((group: Group) => {
                                                    return <CustomInput invalid={submitted && this.props.skillGroupIds.length === 0} checked={this.props.skillGroupIds.indexOf(group.groupId) > -1} onChange={e => this.props.toggleSkillGroup(e.target)} key={"group-" + group.groupId} type="checkbox" id={"skills-group-" + group.groupId} name="skillsGroup" className="pr-4" label={group.name} />
                                                })}
                                            </Row>
                                        </Container>
                                        {submitted && this.props.skillGroupIds.length === 0 && <FormFeedback className="d-inline-block">Please choose at least one skill group and skill</FormFeedback>}
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
                                                                        <CustomInput invalid={submitted && resource.skills.length === 0} checked={resource.skills.some(selectedSkill => selectedSkill.skillId === skill.skillId)} key={"skills-" + skill.skillId} onChange={() => this.props.updateResourceSkills(skill)} type="checkbox" id={"skills-" + skill.skillId} name="skills" className="pr-4" label={skill.name} />
                                                                    )
                                                                })}
                                                            </Row>
                                                        </Container>
                                                    </CardHeader>
                                                </Card>
                                                {submitted && this.props.skillGroupIds.length !== 0 && resource.skills.length === 0 && <FormFeedback className="d-inline-block">Please choose at least one skill</FormFeedback>}
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                </Collapse>
                                <FormGroup className="mb-0" row>
                                    <Label for="inputCertifications" lg={4} className="font-weight-bold">CERTIFICATIONS, IF ANY</Label>
                                    <Col lg={8} className="my-auto">
                                        <Autocomplete
                                            getItemValue={cert => '' + cert.certId}
                                            items={this.props.listOfCertifications.filter(cert => resource.certifications.every(addedCert => addedCert.certId !== cert.certId))}
                                            renderItem={(cert, isHighlighted) =>
                                                <div className="px-4" key={cert.certId} style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                                                    {cert.name}
                                                </div>
                                            }
                                            menuStyle={{
                                                background: 'rgba(255, 255, 255, 0.9)',
                                                borderRadius: '3px',
                                                boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
                                                fontSize: '90%',
                                                maxHeight: '50%',
                                                overflow: 'auto',
                                                padding: '2px 0',
                                                position: 'fixed',
                                                zIndex: 998
                                            }}
                                            inputProps={{ className: 'form-control', name: "certifications", id: "inputCertifications", placeholder: "Search Certifications here..." }}
                                            wrapperProps={{ className: 'd-block' }}
                                            value={this.props.certificationSearch}
                                            onChange={(e) => this.props.updateCertificationSearch(e.target.value)}
                                            onSelect={(val) => {
                                                const newCertification = this.props.listOfCertifications.find(cert => cert.certId === +val);
                                                if (newCertification) {
                                                    this.props.addCertification(newCertification);
                                                }
                                            }}
                                            sortItems={(cert1, cert2) => cert1.name < cert2.name ? -1 : 1}
                                        />
                                    </Col>
                                </FormGroup>
                                <Row>
                                    <Col lg={{ size: 8, offset: 4 }}>
                                        {resource.certifications.map((cert) => <ClosablePill className="mr-3 mt-2" key={cert.certId} text={cert.name} color="secondary" onClose={() => this.props.removeCertification(cert.certId)} />)}
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <Row>
                                    <Col className="text-center mb-2">
                                        {noProject &&
                                            <>
                                                <Button onClick={() => this.props.showOrHideProject("existing")} className="my-2 mx-2">
                                                    <span>Select Existing Project</span>
                                                </Button>
                                                <Button onClick={() => this.props.showOrHideProject("new")} className="my-2 mx-2">
                                                    <IoMdAddCircleOutline /><span className="ml-2">Create New Project</span>
                                                </Button>
                                            </>
                                        }
                                        {newProject &&
                                            <>
                                                <h3 className="mb-0"><Badge color="secondary">New Project</Badge></h3>
                                                <Badge className="clickable" onClick={() => this.props.showOrHideProject("none")} color="light">Undo</Badge>
                                            </>
                                        }
                                        {existingProject &&
                                            <>
                                                <h3 className="mb-0"><Badge color="secondary">Existing Project</Badge></h3>
                                                <Badge className="clickable" onClick={() => this.props.showOrHideProject("none")} color="light">Undo</Badge>
                                            </>
                                        }
                                        {submitted && noProject &&
                                            <>
                                                <span className="form-control is-invalid d-none" />
                                                <FormFeedback>You must choose an existing project or create a new one.</FormFeedback>
                                            </>
                                        }
                                    </Col>
                                </Row>
                                <Collapse isOpen={newProject || (existingProject && resource.project.pId > 0)}>
                                    <FormGroup row>
                                        <Label for="inputCustomerName" lg={4} className="font-weight-bold">CUSTOMER NAME</Label>
                                        <Col lg={8} className="my-auto">
                                            <Input readOnly={existingProject} invalid={submitted && !resource.project.customerName} value={resource.project.customerName ? resource.project.customerName : ''} onChange={e => this.props.updateResource(e.target)} type="text" name="customerName" id="inputCustomerName" required />
                                            <FormFeedback>Please enter a customer name</FormFeedback>
                                        </Col>
                                    </FormGroup>
                                </Collapse>
                                <Collapse isOpen={!noProject}>
                                    <FormGroup row>
                                        <Label for="inputProjectId" lg={4} className="font-weight-bold">PROJECT ID</Label>
                                        <Col lg={8} className="my-auto">
                                            <Input invalid={submitted && !resource.project.pId} value={this.props.projectIdInput ? this.props.projectIdInput : ''} onChange={e => this.props.updateResource(e.target)} type="text" name="projectId" id="inputProjectId" required />
                                            <FormFeedback>{newProject ? "Please enter a project ID" : "Could not find project with this ID"}</FormFeedback>
                                        </Col>
                                    </FormGroup>
                                </Collapse>
                                <Collapse isOpen={newProject || (existingProject && resource.project.pId > 0)}>
                                    <FormGroup row>
                                        <Label readOnly={existingProject} for="inputProjectName" lg={4} className="font-weight-bold">PROJECT NAME</Label>
                                        <Col lg={8} className="my-auto">
                                            <Input readOnly={existingProject} invalid={submitted && !resource.project.name} value={resource.project.name ? resource.project.name : ''} onChange={e => this.props.updateResource(e.target)} type="text" name="projectName" id="inputProjectName" required />
                                            <FormFeedback>Please enter a project name</FormFeedback>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="inputGrade" lg={4} className="font-weight-bold">GRADE</Label>
                                        <Col lg={8} className="my-auto">
                                            <Input invalid={submitted && !resource.grade.gradeId} value={resource.grade.gradeId ? resource.grade.gradeId : ''} onChange={e => this.props.updateResource(e.target)} type="select" name="grade" id="inputGrade" required>
                                                <option value="" hidden></option>
                                                {this.props.listOfGrades.map((grade: Grade) => {
                                                    return (
                                                        <option value={grade.gradeId} key={grade.gradeId}>{grade.name}</option>
                                                    )
                                                })}
                                            </Input>
                                            <FormFeedback>Please choose a grade</FormFeedback>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="inputCompetencyTagging" lg={4} className="font-weight-bold">COMPETENCY TAGGING</Label>
                                        <Col lg={8} className="my-auto">
                                            <Input invalid={submitted && !resource.compentencyTagging.tagId} value={resource.compentencyTagging.tagId ? resource.compentencyTagging.tagId : ""} onChange={e => this.props.updateResource(e.target)} type="select" name="competencyTagging" id="inputCompetencyTagging" required >
                                                <option value="" hidden></option>
                                                {this.props.listOfCompetencyTaggings.map((tag: CompetencyTag) => {
                                                    return (
                                                        <option value={tag.tagId} key={tag.tagId}>{tag.name}</option>
                                                    )
                                                })}
                                            </Input>
                                            <FormFeedback>Please choose a competency tagging</FormFeedback>
                                        </Col>
                                    </FormGroup>
                                </Collapse>
                                {(newProject || (existingProject && resource.project.pId > 0)) && // Visual DatePicker bug if this is included in Collapse (date gets cut off when it first appears after entering valid project id for existing project)
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
                                                    disabled={this.props.dateTbd || existingProject}
                                                    required
                                                />
                                                <span className="my-auto">To</span>
                                                <DatePicker
                                                    onChange={(date) => this.props.updateResource({ name: "endDate", value: date })}
                                                    value={resource.project && resource.project.endDate}
                                                    calendarIcon={<IoMdCalendar />}
                                                    clearIcon={null as any}
                                                    minDate={resource.project.startDate ? resource.project.startDate : undefined}
                                                    disabled={this.props.dateTbd || existingProject}
                                                    required
                                                />
                                            </div>
                                        </Col>
                                    </FormGroup>
                                }
                                <Collapse isOpen={newProject || (existingProject && resource.project.pId > 0)}>
                                    <FormGroup row>
                                        <Col lg={{ size: 8, offset: 4 }}>
                                            <CustomInput disabled={existingProject} invalid={showDateError} checked={this.props.dateTbd} onChange={e => this.props.updateResource(e.target)} type="checkbox" id={"date-tbd"} name="date-tbd" label={"To be decided"} />
                                            {showDateError && <FormFeedback className="d-inline-block">{dateErrorMessage}</FormFeedback>}
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="inputSupervisorId" lg={4} className="font-weight-bold">HCM SUPERVISOR ID</Label>
                                        <Col lg={8} className="my-auto">
                                            <Input readOnly={existingProject} invalid={submitted && !supervisor.assocId} value={this.props.supervisorIdInput ? this.props.supervisorIdInput : ''} onChange={e => this.props.updateResource(e.target)} type="text" name="supervisorId" id="inputSupervisorId" required />
                                            <FormFeedback>Could not find supervisor with this ID</FormFeedback>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="inputSupervisorName" lg={4} className="font-weight-bold">HCM SUPERVISOR NAME</Label>
                                        <Col lg={8} className="my-auto">
                                            <Input value={validSupervisorName ? supervisorName : ''} onChange={e => this.props.updateResource(e.target)} type="text" name="supervisorName" id="inputSupervisorName" placeholder="Autofills with valid supervisor ID" readOnly />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="inputLocation" lg={4} className="font-weight-bold">LOCATION</Label>
                                        <Col lg={8} className="my-auto">
                                            {existingProject ?
                                                <Input readOnly={existingProject} invalid={submitted && !resource.project.location.locationId} value={resource.project.location.locationId ? resource.project.location.name : ""} onChange={e => this.props.updateResource(e.target)} type="text" name="location" id="inputLocation" required />
                                                : <Input readOnly={existingProject} invalid={submitted && !resource.project.location.locationId} value={resource.project.location.locationId ? resource.project.location.locationId : ""} onChange={e => this.props.updateResource(e.target)} type="select" name="location" id="inputLocation" required >
                                                    <option value="" hidden></option>
                                                    {this.props.listOfLocations.map((location: Location) => {
                                                        return (
                                                            <option value={location.locationId} key={location.locationId}>{location.name}</option>
                                                        )
                                                    })}
                                                </Input>}
                                            <FormFeedback>Please choose a project location</FormFeedback>
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
                                </Collapse>
                            </Col>
                        </Row>
                        <div className="fixed-bottom position-sticky bg-white pb-4">
                            <hr />
                            <Container>
                                <Row>
                                    <Button onClick={this.props.cancelResource} color="secondary" className="ml-auto px-4"><small>CANCEL</small></Button>
                                    <Button onClick={() => this.props.submitResource(resource)} color="secondary" className="ml-4 px-3"><IoMdAddCircleOutline /><small className="ml-2">ADD USER</small></Button>
                                </Row>
                            </Container>
                        </div>
                    </Container>
                </Form>
            </>
        );
    }
}

const mapStateToProps = (state: IState) => state.addSkills

const mapDispatchToProps = {
    addCertification: addSkillsActions.addCertification,
    addResumes: addSkillsActions.addResumes,
    cancelResource: addSkillsActions.cancelResource,
    fetchAssociate: addSkillsActions.fetchAssociate,
    fetchCertificationList: addSkillsActions.fetchCertificationList,
    fetchCompetencyTaggingList: addSkillsActions.fetchCompetencyTaggingList,
    fetchGradeList: addSkillsActions.fetchGradeList,
    fetchLocationList: addSkillsActions.fetchLocationList,
    fetchProject: addSkillsActions.fetchProject,
    fetchSupervisor: addSkillsActions.fetchSupervisor,
    removeCertification: addSkillsActions.removeCertification,
    removeResume: addSkillsActions.removeResume,
    showOrHideProject: addSkillsActions.showOrHideProject,
    submitResource: addSkillsActions.submitResource,
    toggleSkillGroup: addSkillsActions.toggleSkillGroup,
    updateCertificationSearch: addSkillsActions.updateCertificationSearch,
    updateResource: addSkillsActions.updateResource,
    updateResourceSkills: addSkillsActions.updateResourceSkills

}

export default connect(mapStateToProps, mapDispatchToProps)(AddSkillsComponent);