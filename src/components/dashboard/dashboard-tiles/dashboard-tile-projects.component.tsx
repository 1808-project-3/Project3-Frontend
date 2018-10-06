import * as React from 'react';
import { Card, Col, CardFooter, Row } from 'reactstrap';
import { MdLibraryBooks } from 'react-icons/md/'
import axios from 'axios';

export default class ProjectsTile extends React.Component<any,any> {

    // displays total number of projects based on the unique project ids in the db
    // clicking on this card opens project list page
    constructor(props:any) {
        super(props);
        this.state = {
            numOfProjects: 0
      }
    }

    public async componentDidMount() {
        console.log('got here');
        const res = await axios.get('http://localhost:8080/projects', {headers: {"JWT": 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2Vycy9Uek1Vb2NNRjRwIiwiZXhwIjo2MjUxNjM3OTYwMCwidXNlcmlkIjoxMjM0NTYsInNjb3BlIjoic2VsZiBncm91cHMvdXNlcnMifQ.nD9kCwmbAIpFj__Qq_e2_XOkbBCe6zhXu713DoBOCjY' }});
        console.log('after fetch');
        this.setState({numOfProjects: res.data.length});
        console.log(this.state.numOfProjects);
        
    }

    public render() {
        return (

         
            <Card className="text-center">
                <Row>
                <Col md={2}>
                    <div className="skillgroup-skill-card-content">
                        <p className="project-number-card">{this.state.numOfProjects}</p>

                    </div>
                </Col>
                <Col md={6}>
                    <p className="project-name-card">NUMBER OF PROJECTS</p>
                </Col>
                <Col md={2} className="three-card-icons" >
                    <p><MdLibraryBooks size={60} color={"#F0EEEE"} /></p>
                </Col>
                </Row>
                <CardFooter className="three-card-footer">In Talent Portal</CardFooter>
            </Card>
        

        )
    }
}