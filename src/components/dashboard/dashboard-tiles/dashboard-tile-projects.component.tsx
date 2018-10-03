import * as React from 'react';
import { Card, Col, CardFooter, Row } from 'reactstrap';
import { MdLibraryBooks } from 'react-icons/md/'

export default class ProjectsTile extends React.Component {

    // displays total number of projects based on the unique project ids in the db
    // clicking on this card opens project list page

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
                    <p className="project-name-card">NUMBER OF PROJECTS</p>
                </Col>
                <Col md={3} >
                    <p><MdLibraryBooks size={100} color={"#F0EEEE"} /></p>
                </Col>
                </Row>
                <CardFooter>In Talent Portal</CardFooter>
            </Card>
        

        )
    }
}