import * as React from "react";
import { connect } from "react-redux";
import {
    getAssociateList,
    getResourceList, getSkills,
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
  skillsList: any[];
  tableType: number;
  getAssociateList: () => any;
  getResourceList: () => any;
  getSkills: () => any;
  updateTableType: (text: string) => any;
}

/**
 * This component displays a table based on associates with the skill passed in the tableType prop
 */

class TablesComponent extends React.Component<IProps, any> {
    constructor(props: any) {
        super(props);
        this.filterResources = this.filterResources.bind(this);
        this.findCert = this.findCert.bind(this);
        this.findName = this.findName.bind(this);
        this.findProjectLocation = this.findProjectLocation.bind(this);
    }

    public filterResources = (tableType: any) => {
        const resources: any[] = [];
        let ifTrue = false;
        for(const item of this.props.resourceList){
            for(const skill of item.skills){
                if(ifTrue){
                    break;
                }
                for(const s of this.props.skillsList){
                    if(+skill.skillId === +s.id && +s.groupId === +tableType){
                        ifTrue = true;
                        break;
                    }
                }
            }
            if(ifTrue){
                ifTrue = false;
                resources.push(
                    <tr key={item.resourceId}>
                        <td>{this.findName(item.associateId)}</td>
                        <td> {item.resourceId} </td>
                        <td>{item.certs.map((c: any) => {
                            const certName = this.findCert(c.certId);
                            return <p key={c.id}>{certName}</p>
                        })}</td>
                        <td> {this.findProjectLocation(item.projectId)} </td>
                        <td> {item.grades.grade} </td>
                    </tr>
                );
            }
        }
        return resources;
    };

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

    public render() {
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
                    {this.filterResources(this.props.tableType)}
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
    skillsList: state.info.skillsList,
    tableType: state.info.tableType
  };
};

const mapDispatchToProps = {
  getAssociateList,
  getResourceList,
  getSkills,
  updateTableType
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TablesComponent);
