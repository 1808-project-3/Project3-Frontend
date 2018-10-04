import * as React from 'react';
import './sidebarStyles.css';
import { Link } from 'react-router-dom';

export class SidebarButton extends React.Component<any, any>
{
    constructor(props:any)
    {
        super(props);
    }

    public render()
    {
        const purl = process.env.PUBLIC_URL;
        return(
            <Link to={this.props.link}><div className="sidebarButton"><img className="sbimg" src={purl+this.props.icon}/></div></Link>
        )
    }
}

