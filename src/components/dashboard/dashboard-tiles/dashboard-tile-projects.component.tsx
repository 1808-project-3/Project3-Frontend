import * as React from 'react';
import {Card, CardBody, Col} from 'reactstrap';

export default class ProjectsTile extends React.Component {

    // displays total number of projects based on the unique project ids in the db
    // clicking on this card opens project list page

    public render() {
        return (
      
                <Col md={12} xl={3} lg={6} xs={12}>
                    <Card>
                        <CardBody>
                            <h5>Projects</h5>
                        </CardBody>
                    </Card>
                </Col>
      
        )
    }
}