import * as React from 'react';
import './sidebarStyles.css';
import { SidebarButton } from './sidebar-button.component';
import { ButtonGroup } from './button-group.component';

export const Sidebar = (props: any) => {
    const path = props.location.pathname;
    return (
        <ButtonGroup>
            <SidebarButton path={path} name="button1" icon={"/images/briefcase-custom-icon.png"} link="/home" />
            <SidebarButton path={path} name="button2" icon={"/images/flag-custom-icon.png"} link="/home/mystery-page-1/used-for-path-testing/long-path-here" />
            <SidebarButton path={path} name="button3" icon={"/images/resource-custom-icon.png"} link="/home/resources" />
            <SidebarButton path={path} name="button4" icon={"/images/plus-custom-icon.png"} link="/home/add-skills" />
            <SidebarButton path={path} name="button5" icon={"/images/check-custom-icon.png"} link="/home/projects" />
        </ButtonGroup>
    )
}
