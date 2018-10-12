import * as React from 'react';
import './sidebarStyles.css';
import { Link } from 'react-router-dom';

export const SidebarButton = (props: any) => {
    const purl = process.env.PUBLIC_URL;
    let style = "sidebarButton";
    if (props.path === props.link) {
        style += " sbactive";
    }

    return (
        <Link to={props.link}>
            <div onClick={() => props.clicked(props.name)} className={style}>
                <img className="sbimg" src={purl + props.icon} />
            </div>
        </Link>
    )
}

