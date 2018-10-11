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

  // public formatData = (obj: any, viewRow: any) => {
  //   const temp: any = [];
  //   let ifTrue = false;
  //   let aupCert: any;
  //   let join: any;
  //   let gradeInfo: any;
  //   console.log("Here's obj: " + obj);
  //     console.log("Here's viewRow: " + viewRow);
  //   obj.map((item: any) => {
  //       item.resources.forEach((project: any) => {
  //           if(+project.projectId === +viewRow){
  //               ifTrue = true;
  //               if(aupCert){
  //                   aupCert = "YES"
  //               }
  //               else {
  //                   aupCert = "NO"
  //               }
  //               join = project.joinDate;
  //               gradeInfo = project.grades.grade;
  //           }
  //       });
  //       if(ifTrue){
  //           console.log("I'm True!!");
  //           ifTrue = false;
  //           temp.push({
  //               aup: aupCert,
  //               grade: gradeInfo,
  //               id: item.userId,
  //               joinDate: join,
  //               name: `${item.firstName} ${item.lastName}`
  //           })
  //       }
  //   });
  //   console.log("This is the temp: " + temp);
  //   return temp;
  // }


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