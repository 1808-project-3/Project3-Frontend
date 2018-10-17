import * as React from 'react';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { TiDownload } from 'react-icons/ti';
import { CardBody, Container, Alert } from 'reactstrap';
import Button from 'reactstrap/lib/Button';
import Card from 'reactstrap/lib/Card';
import CardHeader from 'reactstrap/lib/CardHeader';
import Col from 'reactstrap/lib/Col';
import Row from 'reactstrap/lib/Row';
import { Resource } from '../../models/Resource';
import { Certification } from '../../models/Certification';
import { Skill } from '../../models/Skill';
import { Resume } from '../../models/Resume';
import { getCurrentUser } from '../../helpers';
import { RouteComponentProps } from 'react-router';
import { apiClient } from '../../axios/api-client';


interface IProps extends RouteComponentProps<{}> {
    cancelResource: () => void
    resource: Resource
    toggleConfirm: () => void
}

export class ResourceSkillsDetail extends React.Component<IProps, any> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            errorMessage: ""
        }
    }

    public postResource = async (resource: Resource) => {
        const projJSON = {
            customer: resource.project.customerName,
            description: "no desc",
            endDate: resource.project.endDate,
            location: resource.project.location.name,
            name: resource.project.name,
            startDate: resource.project.startDate,
            supervisorId: resource.project.supervisor.uId
        }

        const resJSON = {
            "associateId": resource.user.uId,
            "aupCert": resource.aupCertified,
            "certs":
                resource.certifications.map((cert) => {
                    return { "certId": cert.certId }
                }),
            "competencyTags": {
                "ct": resource.compentencyTagging.name,
                "ctId": resource.compentencyTagging.tagId
            },
            "grades": {
                "grade": resource.grade.name,
                "gradeId": resource.grade.gradeId
            },
            "projectId": 0,
            "resumes":
                resource.resumes.map((resume) => {
                    return { "resume": resume.url }
                }),
            "skills": resource.skills.map((skill) => {
                return {
                    "skillId": skill.skillId
                }
            })
        }
        try {
            let existProj = false;
            if (resource.project.pId > 0) {
                existProj = true;
            }
            let resProject = { data: { id: 0 } };
            if (!existProj) {
                resProject = await apiClient.post(`project`, { ...projJSON });
            }
            if (existProj || resProject.data) {
                let projId;
                if (existProj) {
                    projId = resource.project.pId;
                } else {
                    console.log("TEST");
                    console.log(resProject.data);
                    projId = resProject.data;
                }
                const resResource = await apiClient.put(`users/update/${resource.user.uId}`, { ...resJSON, "projectId": projId });

                if (resResource.data) {
                    this.props.history.push('/home');
                    this.props.toggleConfirm();
                    this.props.cancelResource();
                }
                else {
                    this.setState({ errorMessage: "Error Submitting Resource" });
                }

            }
            else {
                this.setState({ errorMessage: "Error Submitting Project" });
            }
        }
        catch (err) {
            console.log(err);
            this.setState({ errorMessage: "Error Submitting" });
        }


    };
    public render() {
        const resource = this.props.resource;
        const validDate = resource.project.startDate && resource.project.endDate;
        const currentUser = getCurrentUser();
        return (
            <Container className="pb-3" >
                <Card className="w-100 mb-4">
                    <CardHeader className="font-weight-bold bg-white">
                        SKILL DETAILS
                    </CardHeader>
                    <CardBody>
                        <Row tag="dl">
                            <Col sm={6}>
                                <Row>
                                    <Col tag="dt" xl={4}>ASSOCIATE ID</Col>
                                    <Col tag="dd" xl={8}>{resource.user.assocId}</Col>
                                </Row>
                                <Row>
                                    <Col tag="dt" xl={4}>ASSOCIATE NAME</Col>
                                    <Col tag="dd" xl={8}>{resource.user.getFullName()}</Col>
                                </Row>
                                {currentUser && currentUser.isTalentEnablementLead() &&
                                    <Row>
                                        <Col tag="dt" xl={4}>AUP CERTIFIED</Col>
                                        <Col tag="dd" xl={8}>{resource.aupCertified ? "YES" : "NO"}</Col>
                                    </Row>
                                }
                                <Row>
                                    <Col tag="dt" xl={4}>SKILLS - GROUP</Col>
                                    <Col tag="dd" xl={8}>{resource.skills.map((skill: Skill) => skill.name).join(', ')}</Col>
                                </Row>
                                <Row>
                                    <Col tag="dt" xl={4}>CERTIFICATIONS, IF ANY</Col>
                                    <Col tag="dd" xl={8}>{resource.certifications.map((cert: Certification) => cert.name).join(', ')}</Col>
                                </Row>
                                <Row>
                                    <Col tag="dt" xl={4}>CUSTOMER NAME</Col>
                                    <Col tag="dd" xl={8}>{resource.project.customerName}</Col>
                                </Row>
                                <Row>
                                    <Col tag="dt" xl={4}>PROJECT ID</Col>
                                    <Col tag="dd" xl={8}>{resource.project.pId}</Col>
                                </Row>
                                <Row>
                                    <Col tag="dt" xl={4}>PROJECT NAME</Col>
                                    <Col tag="dd" xl={8}>{resource.project.name}</Col>
                                </Row>
                            </Col>
                            <Col sm={6}>
                                <Row>
                                    <Col tag="dt" xl={4}>GRADE</Col>
                                    <Col tag="dd" xl={8}>{resource.grade.name}</Col>
                                </Row>
                                <Row>
                                    <Col tag="dt" xl={4}>COMPETENCY TAGGING</Col>
                                    <Col tag="dd" xl={8}>{resource.compentencyTagging.name}</Col>
                                </Row>
                                <Row>
                                    <Col tag="dt" xl={4}>PROJECT DATE</Col>
                                    <Col tag="dd" xl={8}>{validDate ? `${formatDate(resource.project.startDate)} - ${formatDate(resource.project.endDate)}` : 'To be decided'}</Col>
                                </Row>
                                <Row>
                                    <Col tag="dt" xl={4}>HCM SUPERVISOR ID</Col>
                                    <Col tag="dd" xl={8}>{resource.project.supervisor.assocId}</Col>
                                </Row>
                                <Row>
                                    <Col tag="dt" xl={4}>HCM SUPERVISOR NAME</Col>
                                    <Col tag="dd" xl={8}>{resource.project.supervisor.getFullName()}</Col>
                                </Row>
                                <Row>
                                    <Col tag="dt" xl={4}>LOCATION</Col>
                                    <Col tag="dd" xl={8}>{resource.project.location.name}</Col>
                                </Row>
                                <Row>
                                    <Col tag="dt" xl={4}>RESUME DOCUMENT</Col>
                                    {resource.resumes.length ?
                                        <Col tag="dd" xl={8}><span className="mr-3">{resource.resumes[0].fileName}</span><TiDownload /></Col> : null
                                    }
                                </Row>
                                {resource.resumes.length > 1 && resource.resumes.map((resume: Resume, idx: number) => {
                                    return (
                                        idx > 0 ?
                                            <Row key={resume.resumeId}>
                                                <Col tag="dd" xl={{ size: 8, offset: 4 }}>
                                                    <span className="mr-3">{resume.fileName}</span><TiDownload />
                                                </Col>
                                            </Row> : null
                                    );
                                })
                                }
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
                <Row>
                    {this.state.errorMessage && (<Alert className="mx-auto d-inline-block" color="danger">
                        <span>There was a problem creating the resource.</span>
                    </Alert>)}
                </Row>
                <Row>
                    <Col>
                        <div className="d-flex justify-content-end">
                            <Button color="secondary" className="ml-auto px-5" onClick={() => this.props.toggleConfirm()}><small>EDIT</small></Button>
                            <Button color="secondary" className="ml-4 px-4" onClick={() => this.postResource(this.props.resource)} ><IoMdAddCircleOutline /><small className="ml-2">CONFIRM</small></Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}


const formatDate = (date: Date) => {
    date = new Date(date)
    const yyyy = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const dd = day < 10 ? `0${day}` : day;
    const mm = month < 10 ? `0${month}` : month
    const validDate = dd && mm && yyyy;
    return `${validDate ? `${mm}/${dd}/${yyyy}` : ''}`;
}