import * as React from 'react';
import {AppNav} from '../nav/nav.component';
import {Sidebar} from '../sidebar/sidebar.component';
import {BreadcrumbBar} from '../breadcrumb/breadcrumb-bar.component';
// import {Breadcrumb} from '../breadcrumb/breadcrumb.component';
import {Footer} from '../footer/footer.component';
import './layoutStyles.css';

export class Layout extends React.Component<any>
{
    constructor(props:any)
    {
        super(props);
        console.log(this.props.location);
    }

    public componentDidUpdate(prevProps: any)
    {
        console.log(this.props.location);
    }

    public render()
    {
        return(
            <div className="layoutPage">
                <AppNav/>
                <Sidebar/>
                <BreadcrumbBar location={this.props.location} history={this.props.history}/>
                <div className="pageContent">
                    {this.props.children}
                </div>
                <Footer/>
            </div>
        )
    }
}