import * as React from 'react';
import './navStyles.css';
import { Link } from 'react-router-dom';

export const NavLink = (props: any) =>{
    return(
        <div className="navLink">
            <Link to={props.path}>{props.children}</Link>
        </div>  
    )
}