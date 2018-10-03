import * as React from 'react';
import { Card, Col,Row,CardFooter} from 'reactstrap';
import {MdGroup} from 'react-icons/md/'

export default class AssociatesTile extends React.Component {

    // displays total number of associates in db
    // clicking this page opens the associates list page

    public render() {
        return (

            <Card>
                <Row>
                <Col md={2}>
                    <div className="skillgroup-skill-card-content">
                        <p className="project-number-card">40</p>

                    </div>
                </Col>
                <Col md={5}>
                    <p className="project-name-card">NUMBER OF RESOURCES</p>
                </Col>
                <Col md={3}>
                    <p><MdGroup size={100} color={"#F0EEEE"} /></p>
                </Col>
                </Row>
                <CardFooter>Project (15)</CardFooter>
            </Card>
          

        )
    }
}