import * as React from 'react';
import './sidebarStyles.css';
import {SidebarButton} from './sidebar-button.component';
import {ButtonGroup} from './button-group.component';

export const Sidebar = (props: any) =>{
    return(
        <ButtonGroup>
            <SidebarButton name="button1" icon={"/images/briefcase-custom-icon.png"} link="/home"/>
            <SidebarButton name="button2" icon={"/images/flag-custom-icon.png"} link="/home/mystery-page-1/used-for-path-testing/long-path-here"/>
            <SidebarButton name="button3" icon={"/images/resource-custom-icon.png"} link="/home/resources"/>
            <SidebarButton name="button4" icon={"/images/plus-custom-icon.png"} link="/home/add-skills"/>
            <SidebarButton name="button5" icon={"/images/check-custom-icon.png"} link="/home/mystery-page-2"/>
        </ButtonGroup>
    )
}
