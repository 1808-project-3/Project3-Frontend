import * as React from 'react';
import { Card, Col,Row,CardFooter} from 'reactstrap';
import {MdGroup} from 'react-icons/md/'

export default class AssociatesTile extends React.Component {

    // displays total number of associates in db
    // clicking this page opens the associates list page

    public render() {
        return (

            <Card className="text-center">
                <Row>
                <Col md={2}>
                    <div className="skillgroup-skill-card-content">
                        <p className="project-number-card">404</p>

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