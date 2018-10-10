import * as React from 'react';
import './sidebarStyles.css';

export class ButtonGroup extends React.Component<any, any>
{
    constructor(props:any)
    {
        super(props);
        this.clicked = this.clicked.bind(this);
        this.state  = {
            active: ""
        }

    }

    public render()
    {
        const buttons = React.Children.map(this.props.children, (child:any, index) => {
            let active = false;
            if(child.props.name === this.state.active)
            {
                active = true;
            }
            return React.cloneElement(child, {
                active: {active},
                clicked: this.clicked,
                icon: child.props.icon
            })
        });

        return(
            <div className="sidebar">
                {buttons}
            </div>
        )
    }

    public clicked(name: string)
    {
        this.setState({
            ...this.state,
            active: name
        })
    }
}