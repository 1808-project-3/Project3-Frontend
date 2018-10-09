import * as React from "react";
import {
  getProjectList,
  getProjectName,
  updateViewRow
} from "../../../actions/info/info.actions";
import { connect } from "react-redux";
import { IState } from "../../../reducers";
import { Table, Container } from "reactstrap";
import ProjectListExport from "./Project-list-export";
import ProjectListAssociatesComponent from "../project-list-associates/project-list-associates.component";

interface IProps {
  viewRow: number;
  projectList: any[];
  getProjectName: (name: string) => any;
  updateViewRow: (id: number) => any;
  getProjectList: () => any;
}

/**
 * This component displays the project list table with an onClick method on each row.
 * This method will display the associate list component that will grab associates related
 * to the project that was clicked.
 */

export class ProjectListTableComponent extends React.Component<IProps, any> {
  constructor(props: any) {
    super(props);
    this.chooseRow = this.chooseRow.bind(this);
  }

  public chooseRow(e: any) {
    const currentTarget = e.currentTarget.dataset;
    this.props.getProjectName(currentTarget.project);
    this.props.updateViewRow(currentTarget.id);
  }

  public componentDidMount() {
    this.props.getProjectList();
  }

  public render() {
    const listEntries: any[] = [];
    for (const l of this.props.projectList) {
      if(+this.props.viewRow === +l.id){
          listEntries.push(
              <tr data-id={l.id} key={l.id} data-project={l.project_name} onClick={this.chooseRow}>
                  <td>{l.project_name}</td>
                  <td>{l.id}</td>
                  <td>{l.start_date}</td>
                  <td>{l.end_date}</td>
                  <td>{l.project_details}</td>
              </tr>
          );
          listEntries.push(
              <tr className="bg-light">
                  <td colSpan={5}>
                    <ProjectListAssociatesComponent />
                  </td>
              </tr>
          );
      }
      else {
        listEntries.push(
          <tr data-id={l.id} key={l.id} data-project={l.project_name} onClick={this.chooseRow}>
            <td>{l.project_name}</td>
            <td>{l.id}</td>
            <td>{l.start_date}</td>
            <td>{l.end_date}</td>
            <td>{l.project_details}</td>
          </tr>
        );
      }
    }
    return (
      <Container fluid>
      <div>
        <span className="float-right"><ProjectListExport /></span>
      </div>
        
        <Table hover>
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
      </Container>
    );
  }
}
const mapStateToProps = (state: IState) => {
  return {
    projectList: state.info.projectList,
    viewRow: state.info.viewRow
  };
};

const mapDispatchToProps = {
  getProjectList,
  getProjectName,
  updateViewRow
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectListTableComponent);
