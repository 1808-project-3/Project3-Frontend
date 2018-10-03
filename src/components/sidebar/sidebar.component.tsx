import * as React from 'react';
import './sidebarStyles.css';
import {SidebarButton} from './sidebar-button';

export class Sidebar extends React.Component
{
    public render()
    {
        return(
            <div className="sidebar">
                <SidebarButton icon={"/images/briefcase-custom-icon.png"} clicked={this.briefcaseClicked}/>
                <SidebarButton icon={"/images/flag-custom-icon.png"} clicked={this.flagClicked}/>
                <SidebarButton icon={"/images/plus-custom-icon.png"}/>
                <SidebarButton icon={"/images/check-custom-icon.png"}/>
            </div>
        )
    }

    public briefcaseClicked = () => {
        alert("briefcase page");
    }

    public flagClicked = () => {
        alert("flag page");
    }
}