import * as React from 'react';
import { Card, Col,Row,CardFooter} from 'reactstrap';
import {MdPerson} from 'react-icons/md/'




export default class CertifiedAssociatesTile extends React.Component {

    // displays total number of associates with certifications


    public render() {
        return (

           
            <Card>
                <Row>
                <Col md={2}>
                    <div className="skillgroup-skill-card-content">
                        <p className="project-number-card">20</p>

                    </div>
                </Col>
                <Col md={5}>
                    <p className="project-name-card">CERTIFIED ASSOCIATES</p>
                </Col>
                <Col md={3} >
                    <p><MdPerson size={100} color={"#F0EEEE"} /></p>
                </Col>
                </Row>
                <CardFooter>In Talent Portal</CardFooter>
            </Card>
           

        )
    }
}