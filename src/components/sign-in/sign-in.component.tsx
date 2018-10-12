import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { ISignInState, IState, IJwtState } from '../../reducers';
import * as signInActions from '../../actions/sign-in/sign-in.actions';
import { connect } from 'react-redux';
import { Alert, Button, Row, Col, Form, Modal, FormGroup, Label, Input, ModalHeader, ModalBody } from 'reactstrap';
import axios from 'axios';
import { environment } from 'src/environment';

interface IProps extends RouteComponentProps<{}> {
  changeModal: () => any,
  changeReset: () => any,
  updateForgotError: (message: string) => any,
  updateError: (message: string) => any,
  updatePassword: (pass: string) => any,
  updateUsername: (userId: string) => any,
  login: (jwt: string, user: any) => void,
  signIn: ISignInState,
  jwt: IJwtState
}

class SignInComponent extends React.Component<IProps, {}> {

  public forgotPassFields = {
    email: '',
    userID: 0
  }

  public resetPassFields = {
    confirmPass: '',
    newPass: '',
    tempPass: '',
    tempPassConfirm: ''
  }

  constructor(props: any) {
    super(props);
  }

  public componentDidMount() {
    console.log(this.props.jwt.jwt);
    console.log(this.props.signIn.errorMessage);
    console.log(this.props.signIn.modal)
  }

  public passwordChange = (e: any) => {
    this.props.updatePassword(e.target.value);
  }

  public usernameChange = (e: any) => {
    this.props.updateUsername(e.target.value);
  }

  public login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const resp = axios.post(environment.context + `users/login`, this.props.signIn.credentials)
    console.log(resp);

    resp.then(res => {
      console.log(res.status);
      switch (res.status) {
        case 200:
          if (res.data) {
            console.log(res.data);
            this.props.updateError("");
            this.props.login(res.data.jwt, res.data.user);
            localStorage.setItem('jwt', res.data.jwt);
            localStorage.setItem('userName', res.data.user.firstName);
            this.props.history.push('home');
          }
          break;
        case 400:
          console.log('invalid login');
          this.props.updateError("Invalid Username or Password");
          break;
        default:
          throw new Error("Failed to login at this time");
      }
    })
      .catch(err => {
        this.props.updateError("Invalid Username or Password");
        console.log(err);
      });
  }


  public forgotPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(this.forgotPassFields);

    const userInfo = {
      email: this.forgotPassFields.email,
      userId: this.forgotPassFields.userID
    };
    try {
      const res1 = await axios.post(environment.context + 'users/changePass', userInfo);
      console.log(res1);
      if (res1) {
        console.log('successfull forgot password call');
        console.log(res1);
        this.resetPassFields.tempPass = res1.data;
        this.props.updateForgotError("");
        this.props.changeModal();
        this.props.changeReset();
      }
      else {
        this.props.updateForgotError("Could not find a user with that email / userID");
        console.log('unsuccessfull change password call');
      }
    }
    catch (error) {
      console.log(error);
      this.props.updateForgotError("Could not find a user with that email / userID");
      console.log('unsuccessfull change password call');
    }
  }
  

  public ResetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(this.resetPassFields);
    const regex = /(?=^.{8,}$)(?=.*[0-9]+.*)(?=.*[!@#$%^*()+{};:.,'?/&_-]+.*)(?=.*[a-zA-Z]+.*)(?!.*\s).*$/;
    if (this.resetPassFields.tempPass === this.resetPassFields.tempPassConfirm) {
      if (regex.test(String(this.resetPassFields.newPass))) {
        if (!this.resetPassFields.newPass.includes(this.forgotPassFields.userID.toString())) {
          if (this.resetPassFields.newPass === this.resetPassFields.confirmPass) {

            const payload = {
              currentPassword: this.resetPassFields.tempPass,
              newPassword: this.resetPassFields.newPass,
              userId: this.forgotPassFields.userID
            };
            const res2 = await axios.put(environment.context + "users/resetPassword", payload);

            if (res2.data) {
              this.props.updateForgotError("");
              console.log('successfull reset password');
              console.log(res2.data);
              this.props.changeReset();
            }
            else {
              this.props.updateForgotError("Server Error");
              console.log('unsuccessfull reset password api call');
            }
          }
          else {
            this.props.updateForgotError("New password did not match");
            console.log('New password did not match');
            console.log(this.resetPassFields.newPass);
            console.log(this.resetPassFields.confirmPass);
          }
        }
        else {
          this.props.updateForgotError("new password contains userID");
          console.log('new password contains userID');
          console.log(this.resetPassFields.newPass);
        }
      }
      else {
        this.props.updateForgotError("Invalid password, must be greater than 8 length and contain 1 character, digit and special character");
        console.log('invalid regex password');
        console.log(this.resetPassFields.newPass);
        // this.props.updateError('Invalid password, must be greater than 8 length and contain 1 character, digit and special character');
      }
    }
    else {
      this.props.updateForgotError("temp pass did not match");
      console.log('temp pass did not match');
      console.log(this.resetPassFields.tempPass);
      console.log(this.resetPassFields.tempPassConfirm);
    }
  }


  public render() {
    const { errorMessage, errorForgotMessage, credentials, modal, resetModal } = this.props.signIn;

    return (

      // forgot password modal
      <div id="sign-in-container">
        {modal && <div>
          <Modal isOpen={modal} className=''>
            <ModalHeader toggle={() => { this.props.changeModal() }}><small className='forget-password-header font-weight-bold'>FORGOT PASSWORD</small></ModalHeader>
            <ModalBody>
              <p className="forget-password-label">Enter User ID/Email and we will send you an email with a temporary password</p>
              <Form onSubmit={this.forgotPassword}>
                <FormGroup>
                  <Row>
                    <Col md={4}>
                      <Label className='forget-password-label font-weight-bold'>USER ID</Label>
                    </Col>
                    <Col md={7}>
                      <Input onChange={(e) => {
                        this.forgotPassFields = {
                          ...this.forgotPassFields,
                          userID: +e.target.value
                        }
                      }} required type="number" />
                    </Col>
                  </Row>
                </FormGroup>

                <FormGroup>
                  <Row>
                    <Col md={4}>
                      <Label><small className='forget-password-label font-weight-bold'>EMAIL</small></Label>
                    </Col>
                    <Col md={7}>
                      <Input onChange={(e) => {
                        this.forgotPassFields = {
                          ...this.forgotPassFields,
                          email: e.target.value
                        }
                      }} required type="text" name="emailforgot" />
                    </Col>
                  </Row>
                </FormGroup>
                <Button id="rest-pass-button" color="secondary" type="submit"><small>RESET PASSWORD</small></Button>
              </Form>
              <Row>
                <Col md={1}></Col>
                <Col>
                {errorForgotMessage && <Alert id="register-alert" className="p-1" color="danger"><small>{errorForgotMessage}</small></Alert>}
                </Col>
              </Row>
            </ModalBody>
          </Modal>
        </div>}

        {/* Reset password modal */}
        {resetModal && <div>
          <Modal isOpen={resetModal} className=''>
            <ModalHeader toggle={() => { this.props.changeReset() }}><small className='forget-password-header font-weight-bold'>RESET PASSWORD</small></ModalHeader>
            <ModalBody>
              <p className="forget-password-label">Enter your temporary password from your email to reset your password</p>
              <Form onSubmit={this.ResetPassword}>
                <FormGroup>
                  <Row>
                    <Col md={4}>
                      <Label className='forget-password-label font-weight-bold'>TEMPORARY PASSWORD</Label>
                    </Col>
                    <Col md={7}>
                      <Input onChange={(e) => {
                        this.resetPassFields = {
                          ...this.resetPassFields,
                          tempPassConfirm: e.target.value
                        }
                      }} required type="text" />
                    </Col>
                  </Row>
                </FormGroup>

                <FormGroup>
                  <Row>
                    <Col md={4}>
                      <Label><small className='forget-password-label font-weight-bold'>NEW PASSWORD</small></Label>
                    </Col>
                    <Col md={7}>
                      <Input onChange={(e) => {
                        this.resetPassFields = {
                          ...this.resetPassFields,
                          newPass: e.target.value
                        }
                      }} required type="password" />
                    </Col>
                  </Row>
                </FormGroup>

                <FormGroup>
                  <Row>
                    <Col md={4}>
                      <Label><small className='forget-password-label font-weight-bold'>CONFIRM PASSWORD</small></Label>
                    </Col>
                    <Col md={7}>
                      <Input onChange={(e) => {
                        this.resetPassFields = {
                          ...this.resetPassFields,
                          confirmPass: e.target.value
                        }
                      }} required type="password" />
                    </Col>
                  </Row>
                </FormGroup>

                <Button id="rest-pass-button" color="secondary" type="submit"><small>RESET PASSWORD</small></Button>
              </Form>
              <Row>
                <Col md={1}></Col>
                <Col>
                {errorForgotMessage && <Alert id="register-alert" className="p-1" color="danger"><small>{errorForgotMessage}</small></Alert>}
                </Col>
              </Row>
            </ModalBody>
          </Modal>
        </div>}

        {/* Start of normal sign in page */}

        <h1 className="h1 mb-3 font-weight-normal" id="name-banner">TALENT PORTAL</h1>
        <h1 className="h3 mb-4 font-weight-normal" id="login-banner">LOGIN</h1>

        <div id="signin-form-container">
          <form className="form-signin" id="signin-form"
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
              this.login(e);

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
            {/* <button onClick={() => { this.props.history.push('register') }} className="btn btn-outline-secondary btn-block" id="register-button" type="button">REGISTER</button> */}

          </form>
          {errorMessage && <p className="text-center" id="error-message">{errorMessage}</p>}
        </div>
        <div id="gray-banner">
          <hr id="line"></hr>
          <p id="copyright-tag">© COGNIZANT</p>
        </div>
      </div>



    );
  }
}

// const mapStateToProps = (state: IState) => (state.signIn);
const mapStateToProps = (state: IState) => {
  return {
    jwt: state.jwt,
    signIn: state.signIn
  }
}

const mapDispatchToProps = {
  changeModal: signInActions.changeModal,
  changeReset: signInActions.changeReset,
  login: signInActions.login,
  updateError: signInActions.updateError,
  updateForgotError: signInActions.updateForgotError,
  updatePassword: signInActions.updatePassword,
  updateUsername: signInActions.updateUsername,
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInComponent);

