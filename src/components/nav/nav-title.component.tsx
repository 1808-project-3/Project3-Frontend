import * as React from 'react';
import './navStyles.css';

export class NavTitle extends React.Component
{
    public render()
    {
        return(
            <div className="title">
                {this.props.children}
            </div>
        )
    }
}