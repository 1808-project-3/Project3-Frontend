import * as React from 'react';
import './breadcrumbStyles.css';

export class Breadcrumb extends React.Component<any>
{
    constructor(props:any)
    {
        super(props);
    }
    public render()
    {
        let style = "crumb";
        if(this.props.active)
        {
            style += " actv";
        }
        else
        {
            style += " inactive";
        }
        return(
            <div className={style}>
                {this.props.children}
            </div>
        )
    }
}
