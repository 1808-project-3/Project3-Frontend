import * as React from "react";
import { connect } from "react-redux";
import { IState } from "../../../reducers";
import {getResourceList, getSkills} from "../../../actions/info/info.actions";
import ReactExport from "react-data-export";

interface IProps {
    associateList: any[];
    certificationList: any[];
    projectList: any[];
    resourceList: any[];
    skillsList: any[];
    getResourceList: () => any;
}

class ResourceListExport extends React.Component<IProps, any> {
    constructor(props: any){
        super(props);
        this.findCert = this.findCert.bind(this);
        this.findName = this.findName.bind(this);
        this.findProjectName = this.findProjectName.bind(this);
    }
    public dataFilter = (tableType: number) => {
        const filteredArray: any[] = [];
        let ifTrue = false;
        let certifications = "";
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
                for(const c of item.certs){
                    certifications += this.findCert(c.certId) + "\n";
                }
                ifTrue = false;
                filteredArray.push(
                    {
                        certs: certifications,
                        grade: item.grades.grade,
                        id: item.resourceId,
                        name: this.findName(item.associateId),
                        projectName: this.findProjectName(item.projectId),
                    }
                );
                certifications = "";
            }
        }
        return filteredArray;
    };

    public findCert = (id: any) => {
        let certName = "";
        for(const cert of this.props.certificationList){
            if(+id === cert.id){
                certName = cert.certificationName;
                break;
            }
        }
        return certName
    };

    public findName = (id: any) => {
        let name = ``;
        this.props.associateList.forEach((a: any) => {
            if(+id === +a.associateId){
                name = `${a.firstName} ${a.lastName}`;
            }
        });
        return name;
    };

    public findProjectName = (id: any) => {
        let name = "";
        this.props.projectList.forEach((p: any) => {
            if(+id === p.projectId){
                name = p.name;
            }
        });
        return name;
    };

    public componentDidMount() {
        this.props.getResourceList();
    }


    public render() {
        const ExcelFile = ReactExport.ExcelFile;
        const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
        const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;
        return (
            <div>
                <ExcelFile element={<button className="btn btn-secondary btn-sm">EXPORT TO XLS</button>}>
                    <ExcelSheet data={this.dataFilter(4)} name="UI">
                        <ExcelColumn label="Associate Name" value="name" />
                        <ExcelColumn label="Id" value="id" />
                        <ExcelColumn label="Certification" value="certs" />
                        <ExcelColumn label="Project Details" value="projectName" />
                        <ExcelColumn label="Grade" value="grade" />
                    </ExcelSheet>
                    <ExcelSheet data={this.dataFilter(1)} name="Mobility">
                        <ExcelColumn label="Associate Name" value="name" />
                        <ExcelColumn label="Id" value="id" />
                        <ExcelColumn label="Certification" value="certs" />
                        <ExcelColumn label="Project Details" value="projectName" />
                        <ExcelColumn label="Grade" value="grade" />
                    </ExcelSheet>
                    <ExcelSheet data={this.dataFilter(3)} name="Content Management">
                        <ExcelColumn label="Associate Name" value="name" />
                        <ExcelColumn label="Id" value="id" />
                        <ExcelColumn label="Certification" value="certs" />
                        <ExcelColumn label="Project Details" value="projectName" />
                        <ExcelColumn label="Grade" value="grade" />
                    </ExcelSheet>
                    <ExcelSheet data={this.dataFilter(2)} name="Design">
                        <ExcelColumn label="Associate Name" value="name" />
                        <ExcelColumn label="Id" value="id" />
                        <ExcelColumn label="Certification" value="certs" />
                        <ExcelColumn label="Project Details" value="projectName" />
                        <ExcelColumn label="Grade" value="grade" />
                    </ExcelSheet>
                </ExcelFile>
            </div>
        );
    }
}

const mapStateToProps = (state: IState) => {
    return {
        associateList: state.info.associateList,
        certificationList: state.info.certificationList,
        projectList: state.info.projectList,
        resourceList: state.info.resourceList,
        skillsList: state.info.skillsList,
    };
};

const mapDispatchToProps = {
    getResourceList,
    getSkills
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ResourceListExport);