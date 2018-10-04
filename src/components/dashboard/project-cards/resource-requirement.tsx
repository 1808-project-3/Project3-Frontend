import * as React from 'react';
import { Container, Card, CardHeader, CardBody, ListGroup, ListGroupItem } from 'reactstrap';

export default class ResourceRequirementComponent extends React.Component<any, any> {

    constructor(props: any){
        super(props);
        this.state={
            resourceRequirements: []
        }
    }

    public componentDidMount(){
        // axios call to get projects
        const resources=[{
                            id: 1,
                            name: 'Project 1'
                        }, 
                        {
                            id: 2,
                            name: 'Project 2'
                        }, 
                        {
                            id: 3,
                            name: 'Project 3'
                        }];
        this.setState({
            ...this.state,
            resourceRequirements: resources
        })
    }

    public render(){
        return (
            <Container className="project-card-container">
                <Card>
                    <CardHeader className="project-card-header"> RESOURCE REQUIREMENTS </CardHeader>
                    <CardBody>
                        <ListGroup style={{ width: '100%' }}>
                            {this.state.resourceRequirements.map((resource: any, index: number) => {
                                return (
                                    <ListGroupItem className={(index%2===0)? "project-card-li-gray" : "project-card-li-white"} key={resource.id}>
                                        <span className="project-card-resource-id"> {resource.id} </span>
                                        <span> {resource.name} </span>
                                    </ListGroupItem>
                                )
                            })}
                        </ListGroup>
                    </CardBody>
                </Card>
            </Container>
        )
    }
}