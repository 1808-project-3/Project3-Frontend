import * as React from 'react';
import { Card, Col, Row, CardFooter } from 'reactstrap';
import { MdPerson } from 'react-icons/md/';
import axios from 'axios';




export default class CertifiedAssociatesTile extends React.Component<any, any> {

    // displays total number of associates with certifications
    constructor(props: any) {
        super(props);
        this.state = {
            numOfCertifiedAsso: 0

        }
    }

    public async componentDidMount() {
        const res = await axios.get('http://localhost:8080/users', { headers: { "JWT": 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2Vycy9Uek1Vb2NNRjRwIiwiZXhwIjo2MjUxNjM3OTYwMCwidXNlcmlkIjoxMjM0NTYsInNjb3BlIjoic2VsZiBncm91cHMvdXNlcnMifQ.nD9kCwmbAIpFj__Qq_e2_XOkbBCe6zhXu713DoBOCjY' } });
        const certified = res.data.filter((user:any) => 
                user.aupCert===true
        );
        this.setState({ numOfCertifiedAsso: certified.length});
        

    }

    public render() {
        return (


            <Card className="text-center">
                <Row>
                    <Col md={2}>
                        <div className="skillgroup-skill-card-content">
                            <p className="project-number-card">{this.state.numOfCertifiedAsso}</p>

                        </div>
                    </Col>
                    <Col md={6}>
                        <p className="project-name-card">CERTIFIED ASSOCIATES</p>
                    </Col>
                    <Col md={2} className="three-card-icons">
                        <p><MdPerson size={60} color={"#F0EEEE"} /></p>
                    </Col>
                </Row>
                <CardFooter className="three-card-footer">In Talent Portal</CardFooter>
            </Card>


        )
    }
}