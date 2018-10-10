import * as React from "react";

import {getAssociateList} from "../../../actions/info/info.actions";
import { connect } from "react-redux";
import { IState } from "../../../reducers";
import {Col, Row} from "reactstrap";
import Card from "reactstrap/lib/Card";
import CardText from "reactstrap/lib/CardText";
import CardTitle from "reactstrap/lib/CardTitle";

interface IProps {
    exampleProp: string;
    associateList: any[];
    projectName: string;
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

    public componentDidMount(){
        this.props.getAssociateList();
    }

    public render() {
        const entries: any[] = [];
        for(const e of this.props.associateList){
            entries.push(
                <Col sm="4">
                    <Card body className="mt-4">
                        <Row>
                            <Col sm="6">
                                <CardTitle><strong>{e.first_name} {e.last_name}</strong></CardTitle>
                            <CardText>({e.user_id})</CardText>
                            <br/>
                            <CardText>AUP CERTIFIED: </CardText>
                                <CardText>DATE OF JOINING: </CardText>
                                <CardText>HCM SUPERVISOR: </CardText>
                            </Col>
                            <Col sm="6">
                                <CardTitle>{e.grade}</CardTitle>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            )
        }

        if(entries === undefined){
            return (
                <div>
                    There is nothing to show!
                </div>
            );
        }
        else {
        return (
            <div>
                <h3>Associate List</h3>
                <Row>
                    {entries}
                </Row>
            </div>
        );
        }

    }
}
const mapStateToProps = (state: IState) => {
    return {
        associateList: state.info.associateList,
        projectName: state.info.projectName
    };
};

const mapDispatchToProps = {
    getAssociateList,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectListAssociatesComponent);
