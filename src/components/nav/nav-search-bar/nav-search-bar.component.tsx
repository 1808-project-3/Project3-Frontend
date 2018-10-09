import * as React from 'react';
import './navSearchStyles.css';
import axios from 'axios';
import {SearchDropDown} from './search-drop-down.component';
// import * as searchActions from '../../actions/search/search.actions';
// import {store} from '../../Store';

// export interface user
// {
//     userId: number,
//     firstName: string,
//     lastName: string
// }

export class SearchBar extends React.Component<any, any>
{
    constructor(props:any)
    {
        super(props);
        this.state = {
            active: false,
            search: "",
            users: [{}]

            // user = {
            //     userId: number,
            //     firstName: string,
            //     lastName: string
            // }
        }
        this.searchChanged = this.searchChanged.bind(this);
        this.search = this.search.bind(this);
        this.focused = this.focused.bind(this);
        this.blurred = this.blurred.bind(this);
    }

    public async componentDidMount()
    {
        const res = await axios.get("http://ec2-18-191-67-157.us-east-2.compute.amazonaws.com:8087/users", 
        {headers: {"JWT": 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2Vycy9Uek1Vb2NNRjRwIiwiZXhwIjo2MjUxNjM3OTYwMCwidXNlcmlkIjoxMjM0NTYsInNjb3BlIjoic2VsZiBncm91cHMvdXNlcnMifQ.nD9kCwmbAIpFj__Qq_e2_XOkbBCe6zhXu713DoBOCjY' }})
        this.setState({
            ...this.state,
            users: res.data
        })
        console.log(this.state.users);
    }

    public render()
    {
        const purl = process.env.PUBLIC_URL;
        const content = [];
        content.push(
            <form className="searchForm" onSubmit={this.search}>
                <input onBlur={this.blurred} onFocus={this.focused} onChange={this.searchChanged} placeholder="Search, Project Details etc.." className="searchInput" type="text"/>
                <img onClick={this.search} className="searchIcon" src={purl+"/images/search-icon.jpg"}/>
            </form>);
        
        if(this.state.active)
        {
            content.push(<SearchDropDown/>);
        }

        return(
            <div className="searchContainer">
                {content}
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
        if(this.state.search !== "")
        {
            const search = {
                search: this.state.search
            }
            axios.post("https://somewehre", search)
            .then(res => {
                console.log(res.data);
            })
            // something something axios
            // let results = [{blank: ""}];
            // store.dispatch(searchActions.setSearchResults(results))
            this.props.history.push("/home/resouces/search-results");
        }
    }
}