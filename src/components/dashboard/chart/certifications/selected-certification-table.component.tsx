import * as React from 'react';
import { Card,  Table, CardBody } from 'reactstrap';
// import {MdCreate} from '@types/react-icons/lib/md/create';
import {MdCreate} from 'react-icons/md/'








export default class SelectedCertificationTableComponent extends React.Component {

    public handleEdit =(event:any)=>{
        event.preventDefault();
        console.log("hello");

    }
    public render() {
        return (
            
                <Card>
                    <CardBody>
                        <div>
                            <h4>Selected Certification Name</h4>
                        </div>
                    <Table>
                        <thead>
                            <tr>
                                <th>ASSOCIATE NAME</th>
                                <th>ID</th>
                                <th>CERTIFICATION</th>
                                <th>PROJECT DETAILS</th>
                                <th>GRADE</th>
                                <th>DETAILS</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>James Rho</td>
                                <td>1234</td>
                                <td>Certification Details</td>
                                <td>Project Name</td>
                                <td>M</td>
                                <td>View Edit</td>
                                <td onClick={this.handleEdit}><MdCreate/></td>
                            </tr>
                        </tbody>
                    </Table>
                    </CardBody>
                </Card>
         
        )
    }

}
