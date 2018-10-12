import * as React from "react";

import {getAssociateList} from "../../../actions/info/info.actions";
import { connect } from "react-redux";
import { IState } from "../../../reducers";
import {Col, Row} from "reactstrap";
import Card from "reactstrap/lib/Card";
import CardText from "reactstrap/lib/CardText";
import CardTitle from "reactstrap/lib/CardTitle";

interface IProps {
    associateList: any[];
    projectList: any[];
    projectName: string;
    viewRow: number;
    getAssociateList: () => any;
}

/**
 * This component displays rows of associates organized within rows of three reactstrap cards.
 *
 * @author
 */

export class ProjectListAssociatesComponent extends React.Component<IProps, any> {
    constructor(props: any) {
        super(props);
        this.getSupervisor = this.getSupervisor.bind(this);
    }

    public getSupervisor = (id: number) => {
        let superId = 0;
        let superName = ``;
        this.props.projectList.forEach((project: any) => {
            if(id === project.projectId){
                superId = project.projectId;
            }
        })
        this.props.associateList.forEach((a: any) => {
            if(a.associateId === superId){
                superName = `${a.firstName} ${a.lastName}`;
            }
        })
        return superName;
    }

    public render() {
        let ifTrue = false;
        let aup: any;
        let joinDate: any;
        let grade: any;
        let hcmSupervisor: any;
        return (
            <div>
                <h3>Associate List</h3>
                <Row>
                    {this.props.associateList.map(item => {
                        item.resources.forEach((project: any) => {
                            if(+project.projectId === +this.props.viewRow){
                                ifTrue = true;
                                if(project.aupCert){
                                    aup = "YES"
                                }
                                else {
                                    aup = "NO"
                                }
                                joinDate = project.joinDate;
                                grade = project.grades.grade;
                                hcmSupervisor = this.getSupervisor(+project.projectId);
                            }
                        });
                        console.log("Supervisor: " + hcmSupervisor);
                        if(ifTrue){
                                ifTrue = false;
                                return (
                                    <Col sm="5" key={item.userId}>
                                        <Card body className="mt-3">
                                            <Row>
                                                <Col sm="6">
                                                    <CardTitle><strong>{item.firstName} {item.lastName}</strong></CardTitle>
                                                    <CardText>({item.userId})</CardText>
                                                </Col>
                                                <Col sm="6">
                                                    <CardTitle>{grade}</CardTitle>
                                                </Col>
                                            </Row>
                                            <br/>
                                            <Row>
                                                <Col sm="6">
                                                    <CardText>AUP CERTIFIED</CardText>
                                                </Col>
                                                <Col sm="6">
                                                    <CardTitle>{aup}</CardTitle>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col sm="6">
                                                    <CardText>DATE OF JOINING</CardText>
                                                </Col>
                                                <Col sm="6">
                                                    <CardTitle>{joinDate}</CardTitle>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col sm="6">
                                                    <CardText>HCM SUPERVISOR</CardText>
                                                </Col>
                                                <Col sm="6">
                                                    <CardTitle>{hcmSupervisor}</CardTitle>
                                                </Col>
                                            </Row>
                                        </Card>
                                    </Col>
                                );
                        }
                        else {
                            return (null);
                        }
                    })
                    }
                </Row>
            </div>
        );
    }
}

const mapStateToProps = (state: IState) => {
    return {
        associateList: state.info.associateList,
        projectList: state.info.projectList,
        projectName: state.info.projectName,
        viewRow: state.info.viewRow
    };
};

const mapDispatchToProps = {
    getAssociateList,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectListAssociatesComponent);
