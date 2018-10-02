import * as React from 'react';
import {Card, CardBody, Col} from 'reactstrap';

export default class AssociatesTile extends React.Component {
    
    // displays total number of associates in db
    // clicking this page opens the associates list page

    public render() {
        return (
        
                <Col md={12} xl={3} lg={6} xs={12}>
                    <Card>
                        <CardBody>
                            <h5>Associates</h5>
                        </CardBody>
                    </Card>
                </Col>
    
        )
    }
}