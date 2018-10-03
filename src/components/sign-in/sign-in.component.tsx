import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { ISignInState, IState } from '../../reducers';
import * as signInActions from '../../actions/sign-in/sign-in.actions';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

interface IProps extends RouteComponentProps<{}>, ISignInState {
  updateError: (message: string) => any
  updatePassword: (password: string) => any,
  updateUsername: (username: string) => any,
  login: (e: React.FormEvent<HTMLFormElement>, credentials: any) => void
}

class SignInComponent extends React.Component<IProps, {}> {

  constructor(props: any) {
    super(props);
  }

  public passwordChange = (e: any) => {
    this.props.updatePassword(e.target.value);
  }

  public usernameChange = (e: any) => {
    this.props.updateUsername(e.target.value);
  }


  public render() {
    const { errorMessage, credentials } = this.props;

    return (
     
      <div id="sign-in-container"> 
      
        <h1 className="h1 mb-3 font-weight-normal" id="name-banner">TALENT PORTAL</h1>
        <div id="signin-form-container">
          <form className="form-signin" id="signin-form" onSubmit={(e: React.FormEvent<HTMLFormElement>) => this.props.login(e, this.props.credentials)}>
            
            <h1 className="h3 mb-3 font-weight-normal" id="login-banner">LOGIN</h1>

            <label htmlFor="inputUsername" className="sr-only">Cognizent ID</label>
            <input
              onChange={this.usernameChange}
              value={credentials.username}
              type="text"
              id="inputUsername"
              className="form-control"
              placeholder="Cognizent ID"
              required />

            <label htmlFor="inputPassword" className="sr-only">PASSWORD</label>
            <input
              onChange={this.passwordChange}
              value={credentials.password}
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="PASSWORD"
              required />
              <p id="new-user-link"><Link to="/password-reset">Forgot Password</Link></p>

            <button className="btn btn-secondary btn-block" id="sign-in-button" type="submit">LOGIN</button>
            {errorMessage && <p id="error-message">{errorMessage}</p>}
            <button className="btn btn-outline-secondary btn-block" id="register-button" type="button">Register</button>
            
          </form>
        </div>
      </div>
            
        
    
    );
  }
}

const mapStateToProps = (state: IState) => (state.signIn);
const mapDispatchToProps = {
  login: signInActions.login,
  updateError: signInActions.updateError,
  updatePassword: signInActions.updatePassword,
  updateUsername: signInActions.updateUsername,
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInComponent);

