import * as React from 'react';
import './navStyles.css';
import axios from 'axios';
// import * as searchActions from '../../actions/search/search.actions';
// import {store} from '../../Store';

export class SearchBar extends React.Component<any, any>
{
    constructor(props:any)
    {
        super(props);
        this.state = {
            search: ""
        }
        this.searchChanged = this.searchChanged.bind(this);
        this.search = this.search.bind(this);
    }

    public render()
    {
        const purl = process.env.PUBLIC_URL;

        return(
            <div className="searchContainer">
                <form className="searchForm" onSubmit={this.search}>
                    <input onChange={this.searchChanged} placeholder="Search, Project Details etc.." className="searchInput" type="text"/>
                    <img onClick={this.search} className="searchIcon" src={purl+"/images/search-icon.jpg"}/>
                </form>
            </div>
        )
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
            this.props.history.push("/home/resources/search-results");
        }
    }
}