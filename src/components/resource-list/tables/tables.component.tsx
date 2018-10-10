import * as React from "react";
import { connect } from "react-redux";
import {
  getResourceList,
  updateTableType
} from "../../../actions/info/info.actions";
import { IState } from "../../../reducers";
import { Table } from "reactstrap";

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
  }

  public componentDidMount() {
    this.props.getResourceList();
  }

  public render() {
    console.log(this.props.resourceList);
    let ifTrue = false;
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
          {this.props.resourceList.map(item => {
            item.skills.forEach((skill: any) => {
              switch (this.props.tableType) {
                  case 1:
                      if(skill.skillId === 1 || skill.skillId === 5){
                          ifTrue = true;
                      }
                      break;
                  case 2:
                      if(skill.skillId === 2 || skill.skillId === 3 || skill.skillId === 4){
                          ifTrue = true;
                      }
                      break;
                  case 3:
                      if(skill.skillId === 6){
                          ifTrue = true;
                      }
                      break;
                  case 4:
                      if(skill.skillId === 7 || skill.skillId === 8 || skill.skillId === 9 || skill.skillId === 10){
                          ifTrue = true;
                      }
                      break;
                  default:
                      ifTrue = false;
                      break;
              }
            });
            if (ifTrue) {
              ifTrue = false;
              return (
                <tr key={item.associateId}>
                  <td>{item.associateId}</td>
                  <td> {item.associateId} </td>
                  <td> {item.aupCert} </td>
                  <td> {item.projectId} </td>
                  <td> {item.grades.grade} </td>
                </tr>
              );
            } else {
              return (
                null
              );
            }
          })}
        </tbody>
      </Table>
    );
  }
}
const mapStateToProps = (state: IState) => {
  return {
    resourceList: state.info.resourceList,
    tableType: state.info.tableType
  };
};

const mapDispatchToProps = {
  getResourceList,
  updateTableType
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TablesComponent);
