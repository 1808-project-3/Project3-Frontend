import * as React from "react";
import projectList from "../../../assets/project-list.json";
import {updateViewRow} from "../../../actions/info/info.actions";
import { connect } from "react-redux";
import { IState } from "../../../reducers";
import { Table } from "reactstrap";
import ProjectListExport from "./ProjectListExport";

interface IProps {
  viewRow: number;
  updateViewRow: (id: number) => any;
}

/**
 * This component displays the project list table
 */

export class ProjectListTableComponent extends React.Component<IProps, any> {
  constructor(props: any) {
    super(props);
    this.chooseRow = this.chooseRow.bind(this);
  }

  public chooseRow(e: any){
      console.log("The id is: "+ e.currentTarget.dataset.id);
      this.props.updateViewRow(e.currentTarget.dataset.id);
  }

  public render() {
    const list = projectList || [];
    const listEntries: any[] = [];
    for (const l of list) {
      console.log(this.props.viewRow);
      if(+this.props.viewRow === +l.id){
          console.log("here");
          listEntries.push(
              <tr data-id={l.id} key={l.id} onClick={this.chooseRow}>
                  <td>{l.project_name}</td>
                  <td>{l.id}</td>
                  <td>{l.start_date}</td>
                  <td>{l.end_date}</td>
                  <td>{l.project_details}</td>
              </tr>
          );
          listEntries.push(
              <tr data-id={l.id} key={0} onClick={this.chooseRow}>
                  <td>HELLO</td>
                  <td>HELLO</td>
                  <td>HELLO</td>
                  <td>HELLO</td>
                  <td>HELLO</td>
              </tr>
          );
      }
      else {
          listEntries.push(
              <tr data-id={l.id} key={l.id} onClick={this.chooseRow}>
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
  return {
      viewRow: state.info.viewRow
  };
};

const mapDispatchToProps = {
    updateViewRow,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectListTableComponent);
