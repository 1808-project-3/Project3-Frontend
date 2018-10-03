import * as React from "react";
import UiDev from '../../../assets/ui-dev.json';
import mobility from '../../../assets/mobility.json';
import cm from '../../../assets/content-management.json';
import design from '../../../assets/design.json';
import { Table } from 'reactstrap';
import { connect } from "react-redux";
import { IState } from "../../../reducers";

interface IProps {
    tableType: string;
}

/**
 * This component displays a table based on associates with the skill passed in the tableType prop
 */

class TablesComponent extends React.Component<IProps, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        let resources;
        if(this.props.tableType === "UI"){
            resources = UiDev;
        }
        else if(this.props.tableType === "Mobility"){
            resources = mobility;
        }
        else if(this.props.tableType === "CM"){
            resources = cm;
        }
        else {
            resources = design;
        }
        const resourceEntries: any[] = [];
        for (const r of resources) {
            resourceEntries.push(
                <tr>
                    <td>{r.first_name} {r.last_name}</td>
                    <td>{r.user_id}</td>
                    <td>{r.certifications.name}</td>
                    <td>{r.project_name}</td>
                    <td>{r.grade}</td>
                </tr>
            )
        }
        return (
            <Table>
                <thead>
                <tr>
                    <th>Associate Name</th>
                    <th>ID</th>
                    <th>Certification</th>
                    <th>Project Details</th>
                    <th>Grade</th>
                </tr>
                </thead>
                <tbody>
                {resourceEntries}
                </tbody>
            </Table>
        );
    }
}
const mapStateToProps = (state: IState) => {
    return {
    };
};

const mapDispatchToProps = {
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TablesComponent);
