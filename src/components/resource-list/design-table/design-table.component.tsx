import * as React from "react";
import design from '../../../assets/design.json';
import { Table } from 'reactstrap';
import { connect } from "react-redux";
import { IState } from "../../../reducers";

interface IProps {
    exampleProp: string;
}

/**
 * This component displays a table based on associates with the Design skill
 */

class DesignTableComponent extends React.Component<IProps, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        const resources = design;
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
            <div>
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
            </div>
        );
    }
}
const mapStateToProps = (state: IState) => {
    return {
        // insert properties of the state here
    };
};

const mapDispatchToProps = {
    // insert actions here
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DesignTableComponent);
