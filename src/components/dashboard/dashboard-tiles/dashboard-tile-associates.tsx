import * as React from 'react';
import { Card, Col,Row,CardFooter} from 'reactstrap'
import {MdGroup} from 'react-icons/md/'
import axios from 'axios'

export default class AssociatesTile extends React.Component<any,any> {
    constructor(props:any) {
        super(props);
        this.state = {
            numOfAssociates: 0
         
      }
    }

    public async componentDidMount() {
        const res = await axios.get('http://ec2-18-191-67-157.us-east-2.compute.amazonaws.com:8087/users',{headers: {"JWT": 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2Vycy9Uek1Vb2NNRjRwIiwiZXhwIjoxNTM5MTkzMzAwLCJ1c2VyaWQiOjEyMzQ1Niwic2NvcGUiOiJzZWxmIGdyb3Vwcy91c2VycyJ9.qVDbspNmTvomDEyBwpw7ZRLvjRSc1trBcSoyL9nz7I8' }});
        this.setState({numOfAssociates: res.data.length});
     
    }

    public render() {
        return (
            <Card className="text-center">
                <Row>
                <Col md={2}>
                    <div className="skillgroup-skill-card-content">
                        <p className="project-number-card">{this.state.numOfAssociates}</p>
                    </div>
                </Col>
                <Col md={6}>
                    <p className="project-name-card">NUMBER OF RESOURCES</p>
                </Col>
                <Col md={2} className="three-card-icons">
                    <p><MdGroup size={60} color={"#F0EEEE"} /></p>
                </Col>
                </Row>
                <CardFooter className="three-card-footer">Project (15)</CardFooter>
            </Card>
          

        )
    }
}