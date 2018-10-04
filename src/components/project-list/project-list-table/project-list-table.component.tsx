import * as React from "react";
import { getProjectList, updateViewRow } from "../../../actions/info/info.actions";
import { connect } from "react-redux";
import { IState } from "../../../reducers";
import { Table, Row, Container } from "reactstrap";
import ProjectListExport from "./ProjectListExport";

interface IProps {
  viewRow: number;
  projectList: any[];
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
    this.props.updateViewRow(e.currentTarget.dataset.id);
  }
  public componentDidMount() {
    this.props.getProjectList();
  }

  public render() {
    const listEntries: any[] = [];
    for (const l of this.props.projectList) {
      if (+this.props.viewRow === +l.id) {
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
      <Container fluid>
        <Row>
          <div className="col-md-7">
            <ProjectListExport />
            <Table hover>
              <thead>
                <tr>
                  <th>PROJECT NAME</th>
                  <th>ID</th>
                  <th>START DATE</th>
                  <th>END DATE</th>
                  <th>CUSTOMER NAME</th>
                </tr>
              </thead>
              <tbody>{listEntries}</tbody>
            </Table>
          </div>
        </Row>
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
  updateViewRow,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectListTableComponent);
