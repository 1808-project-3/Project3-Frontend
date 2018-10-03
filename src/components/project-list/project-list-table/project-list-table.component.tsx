import * as React from "react";
import projectList from "../../../assets/project-list.json";
import { connect } from "react-redux";
import { IState } from "../../../reducers";
import { Table } from "reactstrap";
import ProjectListExport from "./ProjectListExport";

interface IProps {
  exampleProp: string;
}

/**
 * This component displays the project list table
 */

export class ProjectListTableComponent extends React.Component<IProps, any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    const list = projectList || [];
    const listEntries: any[] = [];
    for (const l of list) {
      listEntries.push(
        <tr>
          <td>{l.project_name}</td>
          <td>{l.id}</td>
          <td>{l.start_date}</td>
          <td>{l.end_date}</td>
          <td>{l.project_details}</td>
        </tr>
      );
    }
    return (
      <div>
        <ProjectListExport />
        <Table>
          <thead>
            <tr>
              <th>Project Name</th>
              <th>ID</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Project Details</th>
            </tr>
          </thead>
          <tbody>{listEntries}</tbody>
        </Table>
      </div>
    );
  }
}
const mapStateToProps = (state: IState) => {
  return {};
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectListTableComponent);
