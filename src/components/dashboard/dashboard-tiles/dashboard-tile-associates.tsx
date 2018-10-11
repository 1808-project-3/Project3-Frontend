import * as React from 'react';
import { Card, Col,Row,CardFooter} from 'reactstrap';
import {MdGroup} from 'react-icons/md/';
import { apiClient } from 'src/axios/api-client';


export default class AssociatesTile extends React.Component<any,any> {
    constructor(props:any) {
        super(props);
        this.state = {
            numOfResources: 0
         
      }
    }

    public async componentDidMount() {
        const res = await apiClient.get('users');
        const resources = res.data.filter((resc:any)=>
            resc.resources.length>0 
        )
        this.setState({numOfResources: resources.length});
     
    }

    public render() {
        return (
            <Card className="text-center">
                <Row>
                <Col md={2}>
                    <div className="skill-card-content">
                        <p className="project-number-card">{this.state.numOfResources}</p>
                    </div>
                </Col>
                <Col md={6}>
                    <p className="project-name-card">NUMBER OF RESOURCES</p>
                </Col>
                <Col md={2} className="three-card-icons">
                    <p><MdGroup size={60} color={"#F0EEEE"} /></p>
                </Col>
                </Row>
                <CardFooter className="three-card-footer">In Talent Portal</CardFooter>
            </Card>
          

        )
    }
}