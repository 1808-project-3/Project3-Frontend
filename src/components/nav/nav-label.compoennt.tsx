import * as React from 'react';
import './navStyles.css';

export class NavLabel extends React.Component
{
    public render()
    {
        return(
            <div className="navLabel">
                {this.props.children}
            </div>
        )
    }
}