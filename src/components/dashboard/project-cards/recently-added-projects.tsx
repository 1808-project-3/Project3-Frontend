import * as React from 'react';
import { Card, CardHeader, CardBody, ListGroup, ListGroupItem, CardLink } from 'reactstrap';
import { apiClient } from '../../../axios/api-client';

export default class RecentlyAddedProjectsComponent extends React.Component<any, any> {

    constructor(props: any){
        super(props);
        this.state={
            recentlyAddedProjects: []
        }
    }

    public componentDidMount(){
        // axios call to get projects
        const res= apiClient.get('http://ec2-18-221-142-75.us-east-2.compute.amazonaws.com:8088/project/recent');
        res.then((projects) => {
            if(projects.status===200){
                this.setState({
                    ...this.state,
                    recentlyAddedProjects: projects.data
                })
            }
            else{
                throw new Error('Failed to retrieve recent projects');
            }
        })
    }

    public render(){
        return (
          
                <Card className="project-card-container">
                    <CardHeader className="project-card-header"> RECENTLY ADDED PROJECTS </CardHeader>
                    <CardBody>
                        <ListGroup className="project-card-list">
                            {this.state.recentlyAddedProjects.map((project: any, index: number) => {
                                return (
                                    <ListGroupItem className={(index%2===0)? "project-card-li-gray" : "project-card-li-white"} key={project.projectId}>{project.name}</ListGroupItem>
                                )
                            })}
                        </ListGroup>
                        <div className="project-card-link">
                            <CardLink href="#"> View All Projects </CardLink>
                        </div>
                    </CardBody>
                </Card>
          
        )
    }
}