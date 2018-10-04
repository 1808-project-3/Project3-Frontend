import * as React from 'react';
import { Card, Col,Row,CardFooter} from 'reactstrap';
import {MdGroup} from 'react-icons/md/'
import axios from 'axios';

export default class AssociatesTile extends React.Component<any,any> {
    constructor(props:any) {
        super(props);
        this.state = {
            numOfAssociates: 0
         
      }
    }

    public async componentDidMount() {
        console.log('got here');
        const res = await axios.get('http://localhost:8080/users',{headers: {"JWT": 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2Vycy9Uek1Vb2NNRjRwIiwiZXhwIjo2MjUxNjM3OTYwMCwidXNlcmlkIjoxMjM0NTYsInNjb3BlIjoic2VsZiBncm91cHMvdXNlcnMifQ.nD9kCwmbAIpFj__Qq_e2_XOkbBCe6zhXu713DoBOCjY’' }});
        console.log('after fetch');
        this.setState({numOfAssociates: res.data.length});
        console.log(this.state.numOfAssociates);
        
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