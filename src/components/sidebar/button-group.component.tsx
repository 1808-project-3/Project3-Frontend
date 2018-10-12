import * as React from 'react';
import './sidebarStyles.css';

export class ButtonGroup extends React.Component<any, any>
{
    constructor(props:any)
    {
        super(props);
        this.state  = {
            active: ""
        }

    }

    public render()
    {
        let match:string = "";
        const links:string[] = [];
        React.Children.forEach(this.props.children, (child:any) => {
            links.push(child.props.link);
        })
        match = this.getMatchedLink(this.props.location.pathname, links);
        const buttons = React.Children.map(this.props.children, (child:any, index) => {
            let active = false;
            if(match === child.props.link)
            {
                active = true;
            }
            return React.cloneElement(child, {
                active: {active},
                icon: child.props.icon
            })
        });

        return(
            <div className="sidebar">
                {buttons}
            </div>
        )
    }

    public getMatchedLink(location:string, links:string[])
    {
        const matches:string[] = [];
        links.forEach((link:string) => {
            const length = link.length;
            if(location.length >= length)
            {
                if(location.substr(0, length) === link)
                {
                    matches.push(link);
                }
            }
        });
        if(matches.length > 1)
        {
           let max = matches[0].length;
           let index = 0;
           for(let i = 1; i < matches.length; i++)
           {
               if(matches[i].length > max)
               {
                    max = matches[i].length;
                    index = i;
               }
           }
           return matches[index];
        }
        else if(matches.length === 1)
        {
            return matches[0];
        }
        else
        {
            return "";
        }
    }
}