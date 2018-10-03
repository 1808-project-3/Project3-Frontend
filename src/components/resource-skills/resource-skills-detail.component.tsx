import * as React from 'react';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { TiDownload } from 'react-icons/ti';
import { CardBody, Container } from 'reactstrap';
import Button from 'reactstrap/lib/Button';
import Card from 'reactstrap/lib/Card';
import CardHeader from 'reactstrap/lib/CardHeader';
import Col from 'reactstrap/lib/Col';
import Row from 'reactstrap/lib/Row';
import { User } from '../../models/User';
import { Project } from '../../models/Project';
import { Resource } from '../../models/Resource';
import { Certification } from '../../models/Certification';
import { Skill } from '../../models/Skill';

interface IProps {
    user: User
    project: Project
    resource: Resource
    supervisor: User
    resumes: string[]
    certifications: Certification[]
    skills: Skill[]
}

export const ResourceSkillsDetail: React.StatelessComponent<IProps> = (props) => {
    const { user, project, resource, supervisor, resumes, certifications, skills } = props;
    return (
        <Container className="pb-3">
            <Card className="w-100 mb-4">
                <CardHeader className="font-weight-bold bg-white">
                    SKILL DETAILS
                </CardHeader>
                <CardBody>
                    <Row tag="dl">
                        <Col sm={6}>
                            <Row>
                                <Col tag="dt" xl={4}>ASSOCIATE ID</Col>
                                <Col tag="dd" xl={8}>{user.assocId}</Col>
                            </Row>
                            <Row>
                                <Col tag="dt" xl={4}>ASSOCIATE NAME</Col>
                                <Col tag="dd" xl={8}>{`${user.firstName} ${user.lastName}`}</Col>
                            </Row>
                            <Row>
                                <Col tag="dt" xl={4}>AOP CERTIFIED</Col>
                                <Col tag="dd" xl={8}>{resource.aupCertified ? "YES" : "NO"}</Col>
                            </Row>
                            <Row>
                                <Col tag="dt" xl={4}>SKILLS - GROUP</Col>
                                {skills.map((skill: Skill) => {
                                    return <Col key={skill.skillId} tag="dd" xl={8}>{skill.name}</Col>
                                })}
                            </Row>
                            <Row>
                                <Col tag="dt" xl={4}>CERTIFICATIONS, IF ANY</Col>
                                {certifications.map((cert: Certification) => {
                                    return <Col key={cert.certId} tag="dd" xl={8}>{cert.name}</Col>
                                })}
                            </Row>
                            <Row>
                                <Col tag="dt" xl={4}>CUSTOMER NAME</Col>
                                <Col tag="dd" xl={8}>?</Col>
                            </Row>
                            <Row>
                                <Col tag="dt" xl={4}>PROJECT ID</Col>
                                <Col tag="dd" xl={8}>{project.pId}</Col>
                            </Row>
                            <Row>
                                <Col tag="dt" xl={4}>PROJECT NAME</Col>
                                <Col tag="dd" xl={8}>{project.name}</Col>
                            </Row>
                        </Col>
                        <Col sm={6}>
                            <Row>
                                <Col tag="dt" xl={4}>GRADE</Col>
                                <Col tag="dd" xl={8}>{resource.grade}</Col>
                            </Row>
                            <Row>
                                <Col tag="dt" xl={4}>COMPETENCY TAGGING</Col>
                                <Col tag="dd" xl={8}>{resource.compentencyTagging}</Col>
                            </Row>
                            <Row>
                                <Col tag="dt" xl={4}>DATE OF JOINING</Col>
                                <Col tag="dd" xl={8}>{resource.joinDate}</Col>
                            </Row>
                            <Row>
                                <Col tag="dt" xl={4}>HCM SUPERVISOR ID</Col>
                                <Col tag="dd" xl={8}>{supervisor.assocId}</Col>
                            </Row>
                            <Row>
                                <Col tag="dt" xl={4}>HCM SUPERVISOR NAME</Col>
                                <Col tag="dd" xl={8}>{`${supervisor.firstName} ${supervisor.lastName}`}</Col>
                            </Row>
                            <Row>
                                <Col tag="dt" xl={4}>LOCATION</Col>
                                <Col tag="dd" xl={8}>{project.location}</Col>
                            </Row>
                            <Row>
                                <Col tag="dt" xl={4}>RESUME DOCUMENT</Col>
                                {resumes.map((resume: string) => {
                                    return <Col key={resume} tag="dd" xl={8}><span className="mr-3">{resume}</span><TiDownload /></Col>
                                })
                                }
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