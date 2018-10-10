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
    }

    public componentDidMount() {
        this.props.getAssociateList();
    }

    public render() {
        let ifTrue = false;
        let aup: any;
        let joinDate: any;
        let grade: any;
        // for(const e of this.props.associateList){
        //     entries.push(
        //         <Col sm="4">
        //             <Card body className="mt-4">
        //                 <Row>
        //                     <Col sm="6">
        //                         <CardTitle><strong>{e.first_name} {e.last_name}</strong></CardTitle>
        //                     <CardText>({e.user_id})</CardText>
        //                     <br/>
        //                     <CardText>AUP CERTIFIED: </CardText>
        //                         <CardText>DATE OF JOINING: </CardText>
        //                         <CardText>HCM SUPERVISOR: </CardText>
        //                     </Col>
        //                     <Col sm="6">
        //                         <CardTitle>{e.grade}</CardTitle>
        //                     </Col>
        //                 </Row>
        //             </Card>
        //         </Col>
        //     )
        // }
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
                            }
                        });
                        console.log("ifTrue : " + ifTrue);
                        if(ifTrue){
                                ifTrue = false;
                                return (
                                    <Col sm="4" key={item.userId}>
                                        <Card body className="mt-4">
                                            <Row>
                                                <Col sm="6">
                                                    <CardTitle><strong>{item.firstName} {item.lastName}</strong></CardTitle>
                                                    <CardText>({item.userId})</CardText>
                                                    <br/>
                                                    <CardText>AUP CERTIFIED</CardText>
                                                    <CardText>{joinDate}</CardText>
                                                    <CardText>HCM SUPERVISOR: </CardText>
                                                </Col>
                                                <Col sm="6">
                                                    <CardTitle>{grade}</CardTitle>
                                                    <br/>
                                                    <br/>
                                                    <CardTitle>{aup}</CardTitle>
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
