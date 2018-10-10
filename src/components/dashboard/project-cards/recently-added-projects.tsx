import * as React from 'react';
import { Card, CardHeader, CardBody, ListGroup, ListGroupItem, CardLink } from 'reactstrap';

export default class RecentlyAddedProjectsComponent extends React.Component<any, any> {

    constructor(props: any){
        super(props);
        this.state={
            recentlyAddedProjects: []
        }
    }

    public componentDidMount(){
        // axios call to get projects
        const projects=[{
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
                        },
                        {
                            id: 4,
                            name: 'Project 4'
                        }];
        this.setState({
            ...this.state,
            recentlyAddedProjects: projects
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
                                    <ListGroupItem className={(index%2===0)? "project-card-li-gray" : "project-card-li-white"} key={project.id}>{project.name}</ListGroupItem>
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