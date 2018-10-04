import * as React from 'react';
import './breadcrumbStyles.css';

export class Breadcrumb extends React.Component<any>
{
    constructor(props:any)
    {
        super(props);
        this.clicked = this.clicked.bind(this);
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
            <div onClick={this.clicked} className={style}>
                {this.props.children}
            </div>
        )
    }
    
    public clicked()
    {   
        this.props.history.push(this.props.path);
    }
}
