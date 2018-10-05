import * as React from 'react';
import './navStyles.css';
import { Link } from 'react-router-dom';

export class NavLink extends React.Component<any>
{
    public render()
    {
        return(
            <div className="navLink">
                <Link to={this.props.path}>{this.props.children}</Link>
            </div>  
        )
    }
}