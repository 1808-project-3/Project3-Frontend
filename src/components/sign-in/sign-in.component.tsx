import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { ISignInState, IState, IJwtState } from '../../reducers';
import * as signInActions from '../../actions/sign-in/sign-in.actions';
import { connect } from 'react-redux';
import { Button, Row, Col, Form, Modal, FormGroup, Label, Input, ModalHeader, ModalBody } from 'reactstrap';
import axios from 'axios';

interface IProps extends RouteComponentProps<{}> {
  changeModal: () => any,
  changeReset: () => any,
  updateError: (message: string) => any,
  updatePassword: (pass: string) => any,
  updateUsername: (userId: string) => any,
  login: (e: React.FormEvent<HTMLFormElement>) => void,
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
    const resp = axios.post(`http://ec2-18-191-67-157.us-east-2.compute.amazonaws.com:8087/users/login`, this.props.signIn.credentials)
    console.log(resp);

    resp.then(res => {
      switch (res.status) {
        case 200:
          if (res.data) {
            this.props.updateError("");
            this.props.login(res.data.jwt);
            localStorage.setItem('jwt', res.data.jwt);
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
        this.props.updateError('Failed to login at this time');
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

    const res1 = await axios.post("http://ec2-18-191-67-157.us-east-2.compute.amazonaws.com:8087/users/changePass", userInfo);

    if (res1) {
      console.log('successfull forgot password call');
      console.log(res1);
      this.resetPassFields.tempPass = res1.data;
      this.props.changeModal();
      this.props.changeReset();
    }
    else {
      console.log('unsuccessfull change password call');
    }
  }

  public ResetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(this.resetPassFields);
    if (this.resetPassFields.tempPass === this.resetPassFields.tempPassConfirm) {
      if (this.resetPassFields.newPass === this.resetPassFields.confirmPass) {

        const payload = {
          currentPassword: this.resetPassFields.tempPass,
          newPassword: this.resetPassFields.newPass,
          userId: this.forgotPassFields.userID
        };
        const res2 = await axios.put("http://ec2-18-191-67-157.us-east-2.compute.amazonaws.com:8087/users/resetPassword", payload);

        if (res2.data) {
          console.log('successfull reset password');
          console.log(res2.data);
          this.props.changeReset();
        }
        else {
          console.log('unsuccessfull reset password');
        }
      }
      else {
        console.log('New password did not match');
      }
    }
    else {
      console.log('temp pass did not match');
    }
  }


  public render() {
    const { errorMessage, credentials, modal, resetModal } = this.props.signIn;

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
            <button onClick={() => { this.props.history.push('register') }} className="btn btn-outline-secondary btn-block" id="register-button" type="button">REGISTER</button>
            {errorMessage && <p className="text-center" id="error-message">{errorMessage}</p>}

          </form>
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
  updatePassword: signInActions.updatePassword,
  updateUsername: signInActions.updateUsername,
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInComponent);

