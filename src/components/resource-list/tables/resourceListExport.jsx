// import * as React from 'react';
// import ReactExport from 'react-data-export';
// import { Button } from 'reactstrap';
// import axios from 'axios';
// import { connect } from "react-redux";
//
// class ResourceListExport extends React.Component {
//
//     formatData = (obj) => {
//         let temp = [];
//         obj.data.map((item) => {
//             temp.push({
//                 associateName: `${item.first_name} ${item.last_name}`,
//                 certification: item.certifications.name,
//                 grade: item.grade,
//                 id: item.user_id,
//                 projectDetails: item.project_name
//             });
//         })
//         return temp;
//     }
//
//     componentDidMount = async () => {
//         let ui = await axios.get('https://my-json-server.typicode.com/avicuna/talent-portal-mock/ui');
//         ui = this.formatData(ui);
//         this.props.getResourceUIList(ui);
//
//         let mobility = await axios.get('https://my-json-server.typicode.com/avicuna/talent-portal-mock/mobility');
//         mobility = this.formatData(mobility);
//         this.props.getResourceMobilityList(mobility);
//
//         let cm = await axios.get('https://my-json-server.typicode.com/avicuna/talent-portal-mock/cm');
//         cm = this.formatData(cm);
//         this.props.getResourceCMList(cm);
//
//         let design = await axios.get('https://my-json-server.typicode.com/avicuna/talent-portal-mock/design');
//         design = this.formatData(design);
//         this.props.getResourceDesignList(design);
//     }
//
//     render() {
//         const ExcelFile = ReactExport.ExcelFile;
//         const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
//         const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;
//         return (
//             <ExcelFile
//                 element={
//                     <Button color="secondary" size="sm">
//                         EXPORT TO XLS
// 						</Button>
//                 }
//             >
//                 <ExcelSheet data={this.props.resourceUIList} name="UI">
//                     <ExcelColumn label="ASSOCIATE NAME" value="associateName" />
//                     <ExcelColumn label="ID" value="id" />
//                     <ExcelColumn label="CERTIFICATION" value="certification" />
//                     <ExcelColumn label="PROJECT DETAILS" value="projectDetails" />
//                     <ExcelColumn label="GRADE" value="grade" />
//                 </ExcelSheet>
//                 <ExcelSheet data={this.props.resourceMobilityList} name="Mobility">
//                     <ExcelColumn label="ASSOCIATE NAME" value="associateName" />
//                     <ExcelColumn label="ID" value="id" />
//                     <ExcelColumn label="CERTIFICATION" value="certification" />
//                     <ExcelColumn label="PROJECT DETAILS" value="projectDetails" />
//                     <ExcelColumn label="GRADE" value="grade" />
//                 </ExcelSheet>
//                 <ExcelSheet data={this.props.resourceCMList} name="CM">
//                     <ExcelColumn label="ASSOCIATE NAME" value="associateName" />
//                     <ExcelColumn label="ID" value="id" />
//                     <ExcelColumn label="CERTIFICATION" value="certification" />
//                     <ExcelColumn label="PROJECT DETAILS" value="projectDetails" />
//                     <ExcelColumn label="GRADE" value="grade" />
//                 </ExcelSheet>
//                 <ExcelSheet data={this.props.resourceDesignList} name="Design">
//                     <ExcelColumn label="ASSOCIATE NAME" value="associateName" />
//                     <ExcelColumn label="ID" value="id" />
//                     <ExcelColumn label="CERTIFICATION" value="certification" />
//                     <ExcelColumn label="PROJECT DETAILS" value="projectDetails" />
//                     <ExcelColumn label="GRADE" value="grade" />
//                 </ExcelSheet>
//             </ExcelFile>
//         );
//     }
// }
//
// const mapStateToProps = (state) => {
//     return {
//
//     };
// };
//
// const mapDispatchToProps = {
//
// };
//
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(ResourceListExport);