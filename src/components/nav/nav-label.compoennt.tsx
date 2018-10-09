import * as React from 'react';
import './navStyles.css';

export const NavLabel = (props:any) => {
    return(
        <div className="navLabel">
            {props.children}
        </div>
    )
}