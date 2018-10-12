import * as React from 'react';
import './navSearchStyles.css';
import axios from 'axios';
// import {SearchDropDown} from './search-drop-down.component';
import * as searchActions from '../../../actions/search/search.actions';
import {store} from '../../../Store';

export class SearchBar extends React.Component<any, any>
{
    constructor(props:any)
    {
        super(props);
        this.state = {
            active: false,
            certifications: [],
            projects: [],
            search: "",
            users: []           
        }
        this.searchChanged = this.searchChanged.bind(this);
        this.search = this.search.bind(this);
        this.focused = this.focused.bind(this);
        this.blurred = this.blurred.bind(this);
    }

    public async componentDidMount()
    {
        const userObjects = await axios.get("http://ec2-18-191-67-157.us-east-2.compute.amazonaws.com:8087/users", 
        {headers: {"JWT": 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2Vycy9Uek1Vb2NNRjRwIiwiZXhwIjo2MjUxNjM3OTYwMCwidXNlcmlkIjoxMjM0NTYsInNjb3BlIjoic2VsZiBncm91cHMvdXNlcnMifQ.nD9kCwmbAIpFj__Qq_e2_XOkbBCe6zhXu713DoBOCjY' }})
        this.setState({
            ...this.state,
            users: userObjects.data
        });

        console.log(this.state.users);

        const certifications = await axios.get("http://ec2-54-70-66-176.us-west-2.compute.amazonaws.com:5002/certifications", 
        {headers: {"JWT": 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2Vycy9Uek1Vb2NNRjRwIiwiZXhwIjo2MjUxNjM3OTYwMCwidXNlcmlkIjoxMjM0NTYsInNjb3BlIjoic2VsZiBncm91cHMvdXNlcnMifQ.nD9kCwmbAIpFj__Qq_e2_XOkbBCe6zhXu713DoBOCjY' }})
        this.setState({
            ...this.state,
            certifications: certifications.data
        });

        const projects = await axios.get("http://ec2-18-221-142-75.us-east-2.compute.amazonaws.com:8088/project", 
        {headers: {"JWT": 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2Vycy9Uek1Vb2NNRjRwIiwiZXhwIjo2MjUxNjM3OTYwMCwidXNlcmlkIjoxMjM0NTYsInNjb3BlIjoic2VsZiBncm91cHMvdXNlcnMifQ.nD9kCwmbAIpFj__Qq_e2_XOkbBCe6zhXu713DoBOCjY' }})
        this.setState({
            ...this.state,
            projects: projects.data
        });
    }

    public render()
    {
        const purl = process.env.PUBLIC_URL;
        // const content = [];
        // content.push(
        //     <form className="searchForm" onSubmit={this.search}>
        //         <input onBlur={this.blurred} onFocus={this.focused} onChange={this.searchChanged} placeholder="Search, Project Details etc.." className="searchInput" type="text"/>
        //         <img onClick={this.search} className="searchIcon" src={purl+"/images/search-icon.jpg"}/>
        //     </form>);
        
        // if(this.state.active)
        // {
        //     content.push(<SearchDropDown/>);
        // }

        return(
            <div className="searchContainer">
                <form className="searchForm" onSubmit={this.search}>
                    <input onBlur={this.blurred} onFocus={this.focused} onChange={this.searchChanged} placeholder="Search, Project Details etc.." className="searchInput" type="text"/>
                    <img onClick={this.search} className="searchIcon" src={purl+"/images/search-icon.jpg"}/>
                </form>
            </div>
        )
    }

    public blurred()
    {
        this.setState({
            ...this.state,
            active: false
        })
    }

    public focused()
    {
        this.setState({
            ...this.state,
            active: true
        })
    }

    public searchChanged(e:any)
    {
        const value = e.target.value;
        this.setState({
            ...this.state,
            search: value
        })
    }

    public search(e: any)
    {
        e.preventDefault();
        const search = this.state.search;
        const users = this.state.users;
        if(search !== "")
        {
            let found = false;
            let index = -1;
            for(let i = 0; i < users.length; i++)
            {
                const name = users[i].firstName + " " + users[i].lastName;
                const id = users[i].userId+"";
                if(search === name || search === id)
                {
                    found = true;
                    index = i;
                }
            }
            if(found)
            {
                const user = this.state.users[index];
                const name = user.firstName + " " + user.lastName;
                const id = user.userId;
                const resources = user.resources;

                const results:any = [];
                resources.forEach((res:any) => {
                    const grade = res.grades.grade;
                    const certifications:any = [];
                    res.certs.forEach((cert:any) => {
                        const certId = cert.certId;
                        const allCerts = this.state.certifications;
                        allCerts.forEach((allCert:any) => {
                            const allId = allCert.id;
                            if(certId === allId)
                            {
                                // alert("cert found");
                                certifications.push(allCert.certificationName);
                            }
                        });
                    });
                    
                    const projectId = res.projectId;
                    let projectName = "";
                    let projectDescription = "";
                    const projects = this.state.projects;
                    projects.forEach((project:any) => {
                        if(project.projectId === projectId)
                        {
                            projectName = project.name;
                            projectDescription = project.description; 
                        }
                    });
                    const result = {
                        associateId: id,
                        associateName: name,
                        certifications: [...certifications],
                        grade: ""+grade,
                        projectDescription: ""+projectDescription,
                        projectName: ""+projectName
                    }
                    results.push(result);
                });
                store.dispatch(searchActions.setSearchResults(results));
                console.log(store.getState());
                this.props.history.push("/home/resources/search-results");
            }
            else
            {
                this.props.history.push("/home/resources/search-results");
            }
        }
    }
}