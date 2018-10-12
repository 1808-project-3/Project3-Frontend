import * as React from "react";
import { connect } from "react-redux";
import { IState } from "../../../reducers";
import { getProjectList } from "../../../actions/info/info.actions";
import ReactExport from "react-data-export";

interface IProps {
  associateList: any[];
  viewRow: number;
  projectList: any[];
  projectName: string;
  getProjectList: () => any;
}

/**
 * This component exports all projects to an xls file.
 */

export class ProjectListExport extends React.Component<IProps, any> {
  public componentDidMount() {
    this.props.getProjectList();

  }

  public render() {
    const ExcelFile = ReactExport.ExcelFile;
    const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
    const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;
    return (
      <div>
        <ExcelFile element={<button className="btn btn-secondary btn-sm">EXPORT TO XLS</button>}>
          <ExcelSheet data={this.props.projectList} name="Projects">
            <ExcelColumn label="Project Name" value="name" />
            <ExcelColumn label="Id" value="projectId" />
            <ExcelColumn label="Start Date" value="startDate" />
            <ExcelColumn label="End Date" value="endDate" />
            <ExcelColumn label="Project Details" value="description" />
          </ExcelSheet>
        </ExcelFile>
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
  getProjectList
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectListExport);