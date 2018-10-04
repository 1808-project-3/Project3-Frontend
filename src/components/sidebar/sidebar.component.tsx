import * as React from 'react';
import './sidebarStyles.css';
import {SidebarButton} from './sidebar-button.component';
// import {Button, ButtonGroup} from 'reactstrap';

export class Sidebar extends React.Component
{
    public render()
    {
        return(
            <div className="sidebar">
                <SidebarButton icon={"/images/briefcase-custom-icon.png"} link="/home"/>
                <SidebarButton icon={"/images/flag-custom-icon.png"} link="/home/mystery-page-1/used-for-path-testing/long-path-here"/>
                <SidebarButton icon={"/images/resource-custom-icon.png"} link="/home/resources"/>
                <SidebarButton icon={"/images/plus-custom-icon.png"} link="/home/add-user"/>
                <SidebarButton icon={"/images/check-custom-icon.png"} link="/home/mystery-page-2"/>
            </div>
        )
    }
}



{/* <ButtonGroup vertical>
<Button color="info" block><img className="sbimg" src={process.env.PUBLIC_URL+"/images/briefcase-custom-icon.png"}/></Button>
<Button color="info" block><img className="sbimg" src={process.env.PUBLIC_URL+"/images/flag-custom-icon.png"}/></Button>
<Button color="info" block><img className="sbimg" src={process.env.PUBLIC_URL+"/images/plus-custom-icon.png"}/></Button>
<Button color="info" block><img className="sbimg" src={process.env.PUBLIC_URL+"/images/check-custom-icon.png"}/></Button>
</ButtonGroup> */}