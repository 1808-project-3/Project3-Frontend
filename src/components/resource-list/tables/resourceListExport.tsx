import * as React from "react";
import { connect } from "react-redux";
import { IState } from "../../../reducers";
import {getResourceList} from "../../../actions/info/info.actions";
import ReactExport from "react-data-export";


interface IProps {
    associateList: any[];
    certificationList: any[];
    projectList: any[];
    resourceList: any[];
    getResourceList: () => any;
}

class ResourceListExport extends React.Component<IProps, any> {
    constructor(props: any){
        super(props);
        this.findCert = this.findCert.bind(this);
        this.findName = this.findName.bind(this);
        this.findProjectName = this.findProjectName.bind(this);
    }
    public findCert = (id: any) => {
        let certName = "";
        this.props.certificationList.forEach((cert: any) => {
            if(+id === cert.id){
                certName = cert.certificationName;
            }
        });
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

    // public formatData = (obj: any) => {
    //     const temp: any = [];
    //     obj.map((item: any) => {
    //         if (item.project_name === this.props.projectName) {
    //             temp.push({
    //                 associateName: `${item.first_name} ${item.last_name}`,
    //                 certification: item.certifications.name,
    //                 grade: item.grade,
    //                 id: item.user_id,
    //                 projectDetails: item.project_name
    //             });
    //         }
    //     });
    //     console.log(temp);
    //     return temp;
    // }

    public dataFilter = (dataArray: any, tableType: number) => {
        const filteredArray: any[] = [];
        let ifTrue = false;
        let certifications = "";
        dataArray.forEach((item: any) => {
            item.skills.forEach((skill: any) => {
                switch (tableType) {
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
                        if(skill.skillId === 3){
                            ifTrue = true;
                        }
                    case 4:
                        if(skill.skillId === 7 || skill.skillId === 8 || skill.skillId === 9 || skill.skillId === 10){
                            ifTrue = true;
                        }
                    default:
                        return;
                }
            })
            item.certs.forEach((c: any) => {
                certifications += this.findCert(c.certId) + "\n";
            })
            if(ifTrue){
                filteredArray.push({
                    certs: certifications,
                    grade: item.grades.grade,
                    id: item.resourceId,
                    name: this.findName(item.associateId),
                    projectName: this.findProjectName(item.projectId),
                });
            }
            ifTrue = false;
            certifications = "";
        })
        return filteredArray;
    }

    public render() {
        const ExcelFile = ReactExport.ExcelFile;
        const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
        const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;
        console.log("Here's a filtered list of resources" + this.dataFilter(this.props.resourceList, 4));
        console.log("Here's a list of resources: " + this.props.resourceList);
        return (
            <div>
                <ExcelFile element={<button className="btn btn-secondary btn-sm">EXPORT TO XLS</button>}>
                    <ExcelSheet data={this.dataFilter(this.props.resourceList, 4)} name="UI">
                        <ExcelColumn label="Associate Name" value="name" />
                        <ExcelColumn label="Id" value="id" />
                        <ExcelColumn label="Certification" value="certs" />
                        <ExcelColumn label="Project Details" value="projectName" />
                        <ExcelColumn label="Grade" value="grade" />
                    </ExcelSheet>
                    <ExcelSheet data={this.dataFilter(this.props.resourceList, 1)} name="Mobility">
                        <ExcelColumn label="Associate Name" value="name" />
                        <ExcelColumn label="Id" value="id" />
                        <ExcelColumn label="Certification" value="certs" />
                        <ExcelColumn label="Project Details" value="projectName" />
                        <ExcelColumn label="Grade" value="grade" />
                    </ExcelSheet>
                    <ExcelSheet data={this.dataFilter(this.props.resourceList, 3)} name="Content Management">
                        <ExcelColumn label="Associate Name" value="name" />
                        <ExcelColumn label="Id" value="id" />
                        <ExcelColumn label="Certification" value="certs" />
                        <ExcelColumn label="Project Details" value="projectName" />
                        <ExcelColumn label="Grade" value="grade" />
                    </ExcelSheet>
                    <ExcelSheet data={this.dataFilter(this.props.resourceList, 2)} name="Design">
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
    };
};

const mapDispatchToProps = {
    getResourceList
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ResourceListExport);