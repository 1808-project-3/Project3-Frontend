import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import * as signInActions from '../../actions/sign-in/sign-in.actions';

interface IProps extends RouteComponentProps<{}> {
    logout: () => void
}

class LogoutComponent extends React.Component<IProps, {}> {

    constructor(props: any) {
        super(props);
    }

    public render() {
        return  <Link onClick={()=>{ this.props.logout(); console.log('in logout');}} className='navLink' to=''>Logout</Link>
    }
}
const mapDispatchToProps = {
    logout: signInActions.logout
}

export default connect(null, mapDispatchToProps)(LogoutComponent);