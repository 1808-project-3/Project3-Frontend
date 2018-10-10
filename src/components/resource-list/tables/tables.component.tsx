import * as React from "react";
import { connect } from "react-redux";
import { getResourceList, updateTableType} from "../../../actions/info/info.actions";
import { IState } from "../../../reducers";
import {Table} from "reactstrap";

interface IProps {
    resourceList: any[];
    tableType: number;
    getResourceList: () => any;
    updateTableType: (text: string) => any;
}

/**
 * This component displays a table based on associates with the skill passed in the tableType prop
 */

class TablesComponent extends React.Component<IProps, any> {
    constructor(props: any) {
        super(props);
        this.insertTableInfo = this.insertTableInfo.bind(this);
    }

    public insertTableInfo(row: any){
        return <tr key={row.resourceId}>
            <td>{row.associateId}</td>
            <td>{row.associateId}</td>
            <td>{row.aupCert}</td>
            <td>{row.projectId}</td>
            <td>{row.grades.grade}</td>
        </tr>
    }

    public componentDidMount() {
        this.props.getResourceList();
    }

    public render() {
        const resourceEntries: any[] = [];
        if (this.props.resourceList[0] !== null) {
            for (const r of this.props.resourceList) {
                if(r.skills.length > 0){
                    for(const s of r.skills){
                        switch (this.props.tableType) {
                            case 1:
                                if(s.skillId === 1 || s.skillId === 5){
                                    resourceEntries.push(
                                        <tr key={r.resourceId}>
                                            <td>{r.associateId}</td>
                                            <td>{r.associateId}</td>
                                            <td>{r.aupCert}</td>
                                            <td>{r.projectId}</td>
                                            <td>{r.grades.grade}</td>
                                        </tr>
                                    )
                                }
                                break;
                            case 2:
                                if(s.skillId === 2 || s.skillId === 3 || s.skillId === 4){
                                    resourceEntries.push(
                                        <tr key={r.resourceId}>
                                            <td>{r.associateId}</td>
                                            <td>{r.associateId}</td>
                                            <td>{r.aupCert}</td>
                                            <td>{r.projectId}</td>
                                            <td>{r.grades.grade}</td>
                                        </tr>
                                    )
                                }
                                break;
                            case 3:
                                if(s.skillId === 3){
                                    resourceEntries.push(
                                        <tr key={r.resourceId}>
                                            <td>{r.associateId}</td>
                                            <td>{r.associateId}</td>
                                            <td>{r.aupCert}</td>
                                            <td>{r.projectId}</td>
                                            <td>{r.grades.grade}</td>
                                        </tr>
                                    )
                                }
                                break;
                            case 4:
                                if(s.skillId === 7 || s.skillId === 8 || s.skillId === 9 || s.skillId === 10){
                                    resourceEntries.push(
                                        <tr key={r.resourceId}>
                                            <td>{r.associateId}</td>
                                            <td>{r.associateId}</td>
                                            <td>{r.aupCert}</td>
                                            <td>{r.projectId}</td>
                                            <td>{r.grades.grade}</td>
                                        </tr>
                                    )
                                }
                                break;
                            default:
                                break;
                        }
                    }
                }
                else {
                resourceEntries.push(
                    <tr key={r.resourceId}>
                        <td>NOTHING</td>
                        <td>NOTHING</td>
                        <td>NOTHING</td>
                        <td>NOTHING</td>
                        <td>NOTHING</td>
                    </tr>
                )
                }
            }
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
        resourceList: state.info.resourceList,
        tableType: state.info.tableType,
    };
};

const mapDispatchToProps = {
    getResourceList,
    updateTableType,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TablesComponent);
