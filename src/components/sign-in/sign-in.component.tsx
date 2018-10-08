import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { ISignInState, IState } from '../../reducers';
import * as signInActions from '../../actions/sign-in/sign-in.actions';
import { connect } from 'react-redux';
import { Button, Row, Col, Form, Modal, FormGroup, Label, Input, ModalHeader, ModalBody } from 'reactstrap';

interface IProps extends RouteComponentProps<{}>, ISignInState {
  changeModal: () => any,
  updateError: (message: string) => any,
  updatePassword: (pass: string) => any,
  updateUsername: (userId: string) => any,
  login: (e: React.FormEvent<HTMLFormElement>, credentials: any) => void
}

class SignInComponent extends React.Component<IProps, {}> {

  public forgotPassFields = {
    email: '',
    userID: 0
  }

  constructor(props: any) {
    super(props);
  }

  public passwordChange = (e: any) => {
    this.props.updatePassword(e.target.value);
  }

  public usernameChange = (e: any) => {
    this.props.updateUsername(e.target.value);
  }

  public forgotPassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(this.forgotPassFields);
  }


  public render() {
    const { errorMessage, credentials } = this.props;

    return (

      <div id="sign-in-container">
        {this.props.modal && <div>
          <Modal isOpen={this.props.modal} className=''>
            <ModalHeader toggle={()=> {this.props.changeModal()}}><small className='forget-password-header font-weight-bold'>FORGOT PASSWORD</small></ModalHeader>
            <ModalBody>
              <p><small>Enter User ID/Email and we will send you an email with a temporary password</small></p>
              <Form onSubmit={this.forgotPassword}>
                <FormGroup>
                  <Row>
                    <Col md={4}>
                      <Label className='forget-password-label font-weight-bold'>USER ID</Label>
                    </Col>
                    <Col md={7}>
                      <Input onChange={(e)=> {
                        this.forgotPassFields = {
                          ...this.forgotPassFields,
                          userID: +e.target.value
                        }
                      }} required type="number"/>
                    </Col>
                  </Row>
                </FormGroup>

                <FormGroup>
                  <Row>
                    <Col md={4}>
                      <Label><small className='forget-password-label font-weight-bold'>EMAIL</small></Label>
                    </Col>
                    <Col md={7}>
                      <Input onChange={(e)=> {
                        this.forgotPassFields = {
                          ...this.forgotPassFields,
                          email: e.target.value
                        }
                      }} required type="text" name="emailforgot"/>
                    </Col>
                  </Row>
                </FormGroup>
                <Button id="rest-pass-button" color="secondary" type="submit"><small>RESET PASSWORD</small></Button>
              </Form>
            </ModalBody>
          </Modal>
        </div>}

        <h1 className="h1 mb-3 font-weight-normal" id="name-banner">TALENT PORTAL</h1>
        <h1 className="h3 mb-4 font-weight-normal" id="login-banner">LOGIN</h1>

        <div id="signin-form-container">
          <form className="form-signin" id="signin-form"
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
              this.props.login(e, this.props.credentials);
              // if(){

              // }
              this.props.history.push('home');
            }}>

            {/* <label htmlFor="inputUsername" className="sr-only">COGNIZANT ID</label> */}
            <input
              onChange={this.usernameChange}
              value={credentials.userId}
              type="text"
              id="inputUsername"
              className="form-control"
              placeholder="COGNIZANT ID"
              required />

            {/* <label htmlFor="inputPassword" className="sr-only">PASSWORD</label> */}
            <input
              onChange={this.passwordChange}
              value={credentials.pass}
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="PASSWORD"
              required />
            <p id="forgot-password" className="clickable" onClick={() => { this.props.changeModal() }}><small>Forgot Password</small></p>

            <button className="btn btn-secondary btn-block" id="sign-in-button" type="submit">LOGIN</button>
            {errorMessage && <p id="error-message">{errorMessage}</p>}
            <button onClick={() => { this.props.history.push('register') }} className="btn btn-outline-secondary btn-block" id="register-button" type="button">REGISTER</button>

          </form>
        </div>
        <div id="gray-banner">
          <hr id="line"></hr>
          <p id="copyright-tag">© COGNIZENT</p>
        </div>
      </div>



    );
  }
}

const mapStateToProps = (state: IState) => (state.signIn);
const mapDispatchToProps = {
  changeModal: signInActions.changeModal,
  login: signInActions.login,
  updateError: signInActions.updateError,
  updatePassword: signInActions.updatePassword,
  updateUsername: signInActions.updateUsername,
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInComponent);

