import * as React from 'react';
import { Card, CardHeader, CardBody, ListGroup, ListGroupItem, CardLink } from 'reactstrap';
import { apiClient } from 'src/axios/api-client';

export default class RecentlyAddedProjectsComponent extends React.Component<any, any> {

    constructor(props: any){
        super(props);
        this.state={
            recentlyAddedProjects: []
        }
    }

    public componentDidMount(){
        // axios call to get projects
        apiClient.get('project/recent')
        .then(resp => {
          if (resp.status === 200) {
            const recentProjects = resp.data;
            if(recentProjects){
            this.setState({ 
                ...this.state,
                recentlyAddedProjects: recentProjects})
            }
            return;
          }
          throw new Error('Failed to retrieve recent projects');
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