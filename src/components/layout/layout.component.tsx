import * as React from 'react';
import {AppNav} from '../nav/nav.component';
import {Sidebar} from '../sidebar/sidebar.component';
import {BreadcrumbBar} from '../breadcrumb/breadcrumb-bar.component';
import {Footer} from '../footer/footer.component';
import './layoutStyles.css';

export const Layout = (props: any) =>{
    return(
        <div className="layoutPage">
            <AppNav history={props.history}/>
            <Sidebar/>
            <BreadcrumbBar location={props.location} history={props.history}/>
            <div className="pageContent">
                {props.children}
            </div>
            <Footer/>
        </div>
    )
}