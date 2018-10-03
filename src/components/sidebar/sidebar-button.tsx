import * as React from 'react';
import './sidebarStyles.css';

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
            <div className="sidebarButton" onClick={() => this.props.clicked()}><img className="sbimg" src={purl+this.props.icon}/></div>
        )
    }
}