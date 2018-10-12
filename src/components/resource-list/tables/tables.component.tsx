import * as React from "react";
import { connect } from "react-redux";
import {
    getAssociateList,
    getCertificationList,
    getResourceList,
    updateTableType
} from "../../../actions/info/info.actions";
import { IState } from "../../../reducers";
import { Table } from "reactstrap";
import ReactLoading from 'react-loading';


interface IProps {
  associateList: any[];
  certificationList: any[];
  projectList: any[];
  resourceList: any[];
  tableType: number;
  getAssociateList: () => any;
  getCertificationList: () => any;
  getResourceList: () => any;
  updateTableType: (text: string) => any;
}

/**
 * This component displays a table based on associates with the skill passed in the tableType prop
 */

class TablesComponent extends React.Component<IProps, any> {
    constructor(props: any) {
        super(props);
        this.findCert = this.findCert.bind(this);
        this.findName = this.findName.bind(this);
        this.findProjectLocation = this.findProjectLocation.bind(this);
    }

    public findCert = (id: any) => {
        let certName = "";
        this.props.certificationList.forEach((cert: any) => {
            if (+id === cert.id) {
                certName = cert.certificationName;
            }
        });
        return certName
    };

    public findName = (id: any) => {
        let name = ``;
        this.props.associateList.forEach((a: any) => {
            if (+id === +a.associateId) {
                name = `${a.firstName} ${a.lastName}`;
            }
        });
        return name;
    };

    public findProjectLocation = (id: any) => {
        let location = "";
        this.props.projectList.forEach((p: any) => {
            if (+id === p.projectId) {
                location = p.location;
            }
        });
        return location;
    };

    public componentDidMount() {
        this.props.getAssociateList();
        this.props.getCertificationList();
        this.props.getResourceList();
    }

    public render() {
        let ifTrue = false;
        if (this.props.associateList.length === 0) {
            return (
                <div id="">
                    <br/>
                    <ReactLoading type={'spin'} color={'#5dc3f3'} className="loading-spinner" />
                </div>
            );
        }
        else {
            return (
                <Table>
                    <thead>
                    <tr>
                        <th>Associate Name</th>
                        <th>ID</th>
                        <th>Certification</th>
                        <th>Project Location</th>
                        <th>Grade</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.resourceList.map(item => {
                        item.skills.forEach((skill: any) => {
                            switch (this.props.tableType) {
                                case 1:
                                    if (skill.skillId === 1 || skill.skillId === 5) {
                                        ifTrue = true;
                                    }
                                    break;
                                case 2:
                                    if (skill.skillId === 2 || skill.skillId === 3 || skill.skillId === 4) {
                                        ifTrue = true;
                                    }
                                    break;
                                case 3:
                                    if (skill.skillId === 6) {
                                        ifTrue = true;
                                    }
                                    break;
                                case 4:
                                    if (skill.skillId === 7 || skill.skillId === 8 || skill.skillId === 9 || skill.skillId === 10) {
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
                                    <td>{this.findName(item.associateId)}</td>
                                    <td> {item.associateId} </td>
                                    <td>{item.certs.map((c: any) => {
                                        const certName = this.findCert(c.certId);
                                        return <p key={c.id}>{certName}</p>
                                    })}</td>
                                    <td> {this.findProjectLocation(item.projectId)} </td>
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
}

const mapStateToProps = (state: IState) => {
  return {
    associateList: state.info.associateList,
    certificationList: state.info.certificationList,
    projectList: state.info.projectList,
    resourceList: state.info.resourceList,
    tableType: state.info.tableType
  };
};

const mapDispatchToProps = {
  getAssociateList,
  getCertificationList,
  getResourceList,
  updateTableType
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TablesComponent);
