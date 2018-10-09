import * as React from 'react';
import './navStyles.css';

export class NavProfileText extends React.Component
{
    public render()
    {
        return (
            <div className="profileText">
                <div className="profileName">Welcome John</div>
                <div className="profileLogged">Last Logged In 12:30</div>
            </div>
        )
    }
}