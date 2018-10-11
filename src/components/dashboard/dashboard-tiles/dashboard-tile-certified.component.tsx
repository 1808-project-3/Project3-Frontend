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
        const res = await axios.get('http://ec2-18-191-67-157.us-east-2.compute.amazonaws.com:8087/users', { headers: { "JWT": 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2Vycy9Uek1Vb2NNRjRwIiwiZXhwIjoxNTM5Mjc5OTI0LCJ1c2VyaWQiOjEyMzQ1Niwic2NvcGUiOiJzZWxmIGdyb3Vwcy91c2VycyJ9.HxJgOEmMplGHLHjp-I-QpzIX7b5tAXLLxXKMbJ2-mgc' } });
        const certified = res.data.filter((user:any) => 
                user.userCerts.length>0
        );
        this.setState({ numOfCertifiedAsso: certified.length});
        

    }

    public render() {
        return (


            <Card className="text-center">
                <Row>
                    <Col md={2}>
                        <div className="skill-card-content">
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