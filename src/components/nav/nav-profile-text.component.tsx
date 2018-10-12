import * as React from 'react';
import './navStyles.css';

export class NavProfileText extends React.Component
{
    public date = new Date();
    public checkMinutes = () =>  {
        if(this.date.getMinutes() < 10) {
            const newMinutes = 0 + this.date.getMinutes();
            return newMinutes;
         }
         else{ return this.date.getMinutes(); }
    }
    public checkHours = () =>  {
        if(this.date.getHours() > 12) {
            const newHours = +this.date.getHours() - 12;
            return newHours;
         }
         else{ return this.date.getHours(); }
    }
    public render()
    {
        const name = localStorage.getItem('userName');
        return (
            <div className="profileText">
                <div className="profileName"> Welcome {name}</div>
                <div className="profileLogged">Last Logged In {this.checkHours()}:{this.checkMinutes()}</div>
            </div>
        )
    }
}