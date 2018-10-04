import * as React from 'react';
import './breadcrumbStyles.css';
// import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Breadcrumb} from './breadcrumb.component';

export class BreadcrumbBar extends React.Component<any>
{
    constructor(props:any)
    {
        super(props);
    }

    public render()
    {
        const bci = process.env.PUBLIC_URL + "/images/breadcrumb-divide-icon.png";
        let brokenPath = this.props.location.pathname.split('/');
        if(brokenPath[0] === "")
        {
            brokenPath = brokenPath.slice(1);
        }
        const locations = this.formatPath(this.props.location.pathname);
        console.log(`locations: ${locations}`);
        console.log(`brokenPath: ${brokenPath}`);
        let crumbs:any = [];

        for(let i = 0; i < locations.length; i++)
        {
            if(i === locations.length-1)
            {
                crumbs.push(<Breadcrumb history={this.props.history} active>{locations[i]}</Breadcrumb>)
            }
            else
            {
                let currentPath = "";
                for(let c = 0; c <= i; c++)
                {
                    currentPath += "/"+brokenPath[c];
                    console.log(currentPath);
                }
                crumbs.push(<Breadcrumb history={this.props.history} path={currentPath}>{locations[i]}</Breadcrumb>)
            }
            crumbs.push(<div className="breadcrumbDevider"><img className="bci" src={bci}/></div>)
        }
      
        crumbs = crumbs.slice(0, crumbs.length-1);
        return (
            <div className="breadcrumbNav">
                {crumbs}
            </div>
        )
    }

    public formatPath(raw:string)
    {
        let paths = raw.split('/');
        if(paths[0] === "")
        {
            paths = paths.slice(1);
        }
        for(let i = 0; i < paths.length; i++)
        {
            if(paths[i].includes("-"))
            {
                paths[i] = this.formatHyphen(paths[i]);
            }
            else
            {
                paths[i] = this.firstToUpper(paths[i]);
            }
        }
        return paths;
    }

    public formatHyphen(word:string)
    {
        const words = word.split("-");
        for(let i = 0; i < words.length; i++)
        {
            words[i] = this.firstToUpper(words[i]);
        }
        return words.join(" ");
    }


    public firstToUpper(word:string)
    {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
}

