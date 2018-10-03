import * as React from 'react';
import {AppNav} from '../nav/nav.component';
import {Sidebar} from '../sidebar/sidebar.component';
import {Breadcrumb} from '../breadcrumb/breadcrumb.component';
import {Footer} from '../footer/footer.component';
import './layoutStyles.css';

export class Layout extends React.Component
{
    public render()
    {
        return(
            <div className="layoutPage">
                <AppNav/>
                <Sidebar/>
                <Breadcrumb/>
                <div className="pageContent">
                    {this.props.children}
                </div>
                <Footer/>
            </div>
        )
    }
}