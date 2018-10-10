import * as React from 'react';
import './navStyles.css';

export const NavTitle = (props: any) =>{
    return(
        <div className="title">
            {props.children}
        </div>
    )
}