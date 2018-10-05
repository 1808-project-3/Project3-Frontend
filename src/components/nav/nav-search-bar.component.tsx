import * as React from 'react';
import './navStyles.css';

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
                <input onChange={this.searchChanged} placeholder="Search, Project Details etc.." className="searchInput" type="text"/>
                <img onClick={this.search} className="searchIcon" src={purl+"/images/search-icon.jpg"}/>
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

    public search()
    {
        if(this.state.search !== "")
        {
            this.props.history.push("/home/resouces/search-results");
        }
    }
}