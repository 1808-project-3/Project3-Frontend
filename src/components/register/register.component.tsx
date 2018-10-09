import * as React from 'react';
import { IRegisterState, IState, IJwtState } from '../../reducers';
import { connect } from 'react-redux';
import { updateFields, updateError, clearFields } from '../../actions/register/register.actions';
import { Alert, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { RouteComponentProps } from 'react-router';
import axios from 'axios';


interface IProps extends RouteComponentProps<{}> {
    updateFields: (event: any) => any
    updateError: (message: string) => any
    clearFields: () => any
    jwt: IJwtState
    register: IRegisterState
}

export class RegisterComponent extends React.Component<IProps, {}> {

    public showError = false;

    public submit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('in submit');

        const regex = /(?=^.{8,}$)(?=.*[0-9]+.*)(?=.*[!@#$%^*()+{};:.,'?/&_-]+.*)(?=.*[a-zA-Z]+.*)(?!.*\s).*$/;
        if (this.props.register.userID.toString().length !== 6) {
            console.log('invalid userID length');
            console.log(this.props.register.userID);
            this.props.updateError(`Invalid userID length
           Length must be 6 `);
            this.showError = true;
        }
        
        else if (regex.test(String(this.props.register.password))) {
            if (!this.props.register.password.includes(this.props.register.userID.toString())) {
                if (this.props.register.password === this.props.register.confirmPassword) {
                    console.log('valid password');
                    console.log(this.props.register.password);
                    this.showError = false;
                    this.props.updateError('');


                    const payload = {

                        email: this.props.register.email,
                        firstName: this.props.register.firstName,
                        lastName: this.props.register.lastName,                       
                        pass: this.props.register.password,
                        role: this.props.register.roleProfile,
                        userId: this.props.register.userID

                    };
                    const res = await axios.post('http://ec2-18-191-67-157.us-east-2.compute.amazonaws.com:8087/users', payload, {headers: {"JWT": this.props.jwt.jwt }})
                    console.log(res.data);
                    this.props.clearFields();
                    this.props.history.push('home');

                }
                else {
                    console.log('passwords do not match');
                    console.log(this.props.register.password);
                    console.log(this.props.register.confirmPassword);
                    this.props.updateError(`Passwords didn't match`);
                    this.showError = true;
                }
            }
            else {
                console.log('invalid password, has userID');
                console.log(this.props.register.password);
                this.props.updateError('Invalid password, Cannot Contain UserID');
                this.showError = true;
            }
        }
        else {
            console.log('invalid regex password');
            console.log(this.props.register.password);
            this.props.updateError('Invalid password, must be greater than 8 length and contain 1 character, digit and special character');
            this.showError = true;
        }

    }


    public render() {
        return (
            <div id="sign-in-container">
                <h1 className="h1 mb-3 font-weight-normal" id="name-banner">TALENT PORTAL</h1>
                <h1 className="h3 mb-4 font-weight-normal" id="login-banner-register">REGISTER</h1>
                <Form id='register-form' onSubmit={this.submit}>

                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Row>
                                    <Col md={4}>
                                        <Label className="register-label"><small className='font-weight-bold'>FIRST NAME</small></Label>
                                    </Col>
                                    <Col md={7}>
                                        <Input required onChange={(e) => { this.props.updateFields(e.target) }}
                                            type="text" name="firstName" placeholder="Name" value={this.props.register.firstName} />

                                    </Col>
                                </Row>
                            </FormGroup>
                            <FormGroup>
                                <Row>
                                    <Col md={4}>
                                        <Label className="register-label"><small className='font-weight-bold'>LAST NAME</small></Label>
                                    </Col>
                                    <Col md={7}>
                                        <Input required onChange={(e) => { this.props.updateFields(e.target) }}
                                            type="text" name="lastName" placeholder="Last Name" value={this.props.register.lastName} />

                                    </Col>
                                </Row>
                            </FormGroup>
                            <FormGroup>
                                <Row>
                                    <Col md={4}>
                                        <Label className="register-label"><small className='font-weight-bold'>EMAIL ADDRESS</small></Label>
                                    </Col>
                                    <Col md={7}>
                                        <Input required onChange={(e) => { this.props.updateFields(e.target) }}
                                            type="email" name="email" placeholder="username@portal.com" value={this.props.register.email} />

                                    </Col>
                                </Row>
                            </FormGroup>
                            <FormGroup>
                                <Row>
                                    <Col md={4}>
                                        <Label className="register-label"><small className='font-weight-bold'>ROLE PROFILE</small></Label>
                                    </Col>
                                    <Col md={7}>
                                        <Input required onChange={(e) => { this.props.updateFields(e.target) }} type="select" name="roleProfile" value={this.props.register.roleProfile}>
                                            <option className="text-secondary" value='' hidden>Select Role</option>
                                            <option value={1}>Competency Lead</option>
                                            <option value={2}>Talent Enablement Lead</option>
                                            <option value={3}>Supervisor</option>
                                            <option value={4}>Associate</option>
                                        </Input>
                                    </Col>
                                </Row>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Row>
                                    <Col md={4}>
                                        <Label className="register-label"><small className='font-weight-bold'>CREATE USER ID</small></Label>
                                    </Col>
                                    <Col md={7}>
                                        <Input required onChange={(e) => { this.props.updateFields(e.target) }}
                                            type="number" name="userID" placeholder="User ID" value={this.props.register.userID} />

                                    </Col>
                                </Row>
                            </FormGroup>
                            <FormGroup>
                                <Row>
                                    <Col md={4}>
                                        <Label className="register-label"><small className='font-weight-bold'>PASSWORD</small></Label>
                                    </Col>
                                    <Col md={7}>
                                        <Input required onChange={(e) => { this.props.updateFields(e.target) }}
                                            type="password" name="password" placeholder="Enter Password" value={this.props.register.password} />

                                    </Col>
                                </Row>
                            </FormGroup>
                            <FormGroup>
                                <Row>
                                    <Col md={4}>
                                        <Label className="register-label"><small className='font-weight-bold'>CONFIRM PASSWORD</small></Label>
                                    </Col>
                                    <Col md={7}>
                                        <Input required onChange={(e) => { this.props.updateFields(e.target) }}
                                            type="password" name="confirmPassword" placeholder="Confirm" value={this.props.register.confirmPassword} />

                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={4}>
                                    </Col>
                                    <Col md={5}>
                                        {this.showError && <Alert id="register-alert" className="p-1" color="danger"><small>{this.props.register.errorMessage}</small></Alert>}
                                    </Col>
                                </Row>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Button id="register-form-button" type="submit">REGISTER</Button>
                    </Row>
                </Form>
                <div id="gray-banner-register">
                    <hr id="line-register"></hr>
                    <p id="copyright-tag">© COGNIZANT</p>
                </div>
            </div>
        );
    }
}

// const mapStateToProps = (state: IState) => (state.register);
const mapStateToProps = (state: IState) => {
    return {
        jwt: state.jwt,
        register: state.register
    }
  }
const mapDispatchToProps = {
    clearFields,
    updateError,
    updateFields
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterComponent);