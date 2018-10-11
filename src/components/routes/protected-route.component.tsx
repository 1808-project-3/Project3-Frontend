import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getCurrentUser } from '../../helpers';

export class ProtectedRoute extends React.Component<any, {}> {
    public render() {
        const { component: Component, ...props } = this.props
        const signInRoute = props.path === '/sign-in';
        return (
            <Route
                {...props}
                render={prop => (
                    getCurrentUser() ?
                        (this.props.component && !signInRoute ?
                            <Component {...prop} /> :
                            <Redirect to='/home' />) :
                        (signInRoute ?
                            <Component {...prop} /> :
                            <Redirect to='/sign-in' />
                        )
                )
                }
            />
        )
    }
}