import * as React from 'react';
import { Card, Col, Row, CardFooter } from 'reactstrap';
import { MdPerson } from 'react-icons/md/';
// import { apiClient } from 'src/axios/api-client';

interface IProps {
    users: any
}

export default class CertifiedAssociatesTile extends React.Component<IProps, any> {

    // displays total number of associates with certifications
    constructor(props: any) {
        super(props);
        this.state = {
            numOfCertifiedAsso: 0
        }
    }

    public componentDidMount() {
        // apiClient.get('users').then((res) => {
        //     const certified = res.data.filter((user:any) => 
        //         user.userCerts.length>0
        //     );
        //     this.setState({ numOfCertifiedAsso: certified.length});
        // })
        const res = this.props.users;
        const certified = res.filter((user:any) => 
                user.userCerts.length>0);
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