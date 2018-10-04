import * as React from 'react';
import ReactExport from 'react-data-export';
import { Button } from 'reactstrap';
import axios from 'axios';

export default class ResourceListExport extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cm: [],
            design: [],
            mobility: [],
            ui: []
        }
    }

    formatData = (obj) => {
        let temp = [];
        obj.data.map((item) => {
            temp.push({
                associateName: `${item.first_name} ${item.last_name}`,
                certification: item.certifications.name,
                grade: item.grade,
                id: item.user_id,
                projectDetails: item.project_name
            });
        })
        return temp;
    }

    componentDidMount = async () => {
        let ui = await axios.get('http://localhost:4000/ui');
        ui = this.formatData(ui);
        this.setState({ ui });

        let mobility = await axios.get('http://localhost:4000/mobility');
        mobility = this.formatData(mobility);
        this.setState({ mobility });

        let cm = await axios.get('http://localhost:4000/cm');
        cm = this.formatData(cm);
        this.setState({ cm });

        let design = await axios.get('http://localhost:4000/design');
        design = this.formatData(design);
        this.setState({ design });
    }

    render() {
        const ExcelFile = ReactExport.ExcelFile;
        const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
        const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;
        return (
            <div>
                <ExcelFile
                    element={
                        <Button color="secondary" size="sm" block>
                            Export All
						</Button>
                    }
                >
                    <ExcelSheet data={this.state.ui} name="UI">
                        <ExcelColumn label="ASSOCIATE NAME" value="associateName" />
                        <ExcelColumn label="ID" value="id" />
                        <ExcelColumn label="CERTIFICATION" value="certification" />
                        <ExcelColumn label="PROJECT DETAILS" value="projectDetails" />
                        <ExcelColumn label="GRADE" value="grade" />
                    </ExcelSheet>
                    <ExcelSheet data={this.state.mobility} name="Mobility">
                        <ExcelColumn label="ASSOCIATE NAME" value="associateName" />
                        <ExcelColumn label="ID" value="id" />
                        <ExcelColumn label="CERTIFICATION" value="certification" />
                        <ExcelColumn label="PROJECT DETAILS" value="projectDetails" />
                        <ExcelColumn label="GRADE" value="grade" />
                    </ExcelSheet>
                    <ExcelSheet data={this.state.cm} name="CM">
                        <ExcelColumn label="ASSOCIATE NAME" value="associateName" />
                        <ExcelColumn label="ID" value="id" />
                        <ExcelColumn label="CERTIFICATION" value="certification" />
                        <ExcelColumn label="PROJECT DETAILS" value="projectDetails" />
                        <ExcelColumn label="GRADE" value="grade" />
                    </ExcelSheet>
                    <ExcelSheet data={this.state.design} name="Design">
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