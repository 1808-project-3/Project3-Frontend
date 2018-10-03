import * as React from 'react';
import './navStyles.css';

export class SearchBar extends React.Component
{
    public render()
    {
        const purl = process.env.PUBLIC_URL;

        return(
            <div className="searchContainer">
                <input placeholder="Search, Project Details etc.." className="searchInput" type="text"/>
                <img className="searchIcon" src={purl+"/images/search-icon.jpg"}/>
            </div>
        )
    }
}