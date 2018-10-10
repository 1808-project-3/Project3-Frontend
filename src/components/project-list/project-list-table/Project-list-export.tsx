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

class ProjectListExport extends React.Component<IProps, any> {
  public componentDidMount() {
    this.props.getProjectList();

  }

  public formatData = (obj: any) => {
    const temp: any = [];
    obj.map((item: any) => {
      temp.push({
        associateName: `${item.first_name} ${item.last_name}`,
        certification: item.certifications.name,
        grade: item.grade,
        id: item.user_id,
        projectDetails: item.project_name
      });
    });
    console.log(temp);
    return temp;

  }

  public dataFilter = (dataArray: any) => {
    return dataArray.filter((project: any) => {
      return project.name === this.props.projectName;
    })
  }

  public render() {
    const ExcelFile = ReactExport.ExcelFile;
    const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
    const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;
    return (
      <div>
        <ExcelFile element={<button className="btn btn-secondary btn-sm">EXPORT TO XLS</button>}>
          <ExcelSheet data={this.dataFilter(this.props.projectList)} name="Projects">
            <ExcelColumn label="Project Name" value="name" />
            <ExcelColumn label="Id" value="projectId" />
            <ExcelColumn label="Start Date" value="startDate" />
            <ExcelColumn label="End Date" value="endDate" />
            <ExcelColumn label="Project Details" value="description" />
          </ExcelSheet>
          <ExcelSheet data={this.formatData(this.props.associateList)} name="Associates">
            <ExcelColumn label="ASSOCIATE NAME" value="associateName" />
            <ExcelColumn label="ID" value="id" />
            <ExcelColumn label="CERTIFICATION" value="certification" />
            <ExcelColumn label="PROJECT DETAILS" value="projectDetails" />
            <ExcelColumn label="GRADE" value="grade" />
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