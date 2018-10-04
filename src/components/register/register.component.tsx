import * as React from 'react';
import { IRegisterState, IState } from '../../reducers';
import { connect } from 'react-redux';
import { updateFields, updateError, clearFields } from '../../actions/register/register.actions';
import { Alert, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { RouteComponentProps } from 'react-router';
import axios from 'axios';


interface IProps extends RouteComponentProps<{}>, IRegisterState {
    updateFields: (event: any) => any
    updateError: (message: string) => any
    clearFields: () => any
}

export class RegisterComponent extends React.Component<IProps, {}> {

    public showError = false;

    public submit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('in submit');

        const regex = /(?=^.{8,}$)(?=.*[0-9]+.*)(?=.*[!@#$%^*()+{};:.,'?/&_-]+.*)(?=.*[a-zA-Z]+.*)(?!.*\s).*$/;
        if (this.props.userID.toString().length !== 6) {
            console.log('invalid userID length');
            console.log(this.props.userID);
            this.props.updateError(`Invalid userID length
           Length must be 6 `);
            this.showError = true;
        }
        
        else if (regex.test(String(this.props.password))) {
            if (!this.props.password.includes(this.props.userID.toString())) {
                if (this.props.password === this.props.confirmPassword) {
                    console.log('valid password');
                    console.log(this.props.password);
                    this.showError = false;
                    this.props.updateError('');


                    const payload = {

                        email: this.props.email,
                        firstName: this.props.firstName,
                        lastName: this.props.lastName,                       
                        pass: this.props.password,
                        role: this.props.roleProfile,
                        userId: this.props.userID

                    };
                    const res = await axios.post('http://localhost:8080/users', payload)
                    console.log(res.data);
                    this.props.clearFields();

                }
                else {
                    console.log('passwords do not match');
                    console.log(this.props.password);
                    console.log(this.props.confirmPassword);
                    this.props.updateError(`Passwords didn't match`);
                    this.showError = true;
                }
            }
            else {
                console.log('invalid password');
                console.log(this.props.password);
                this.props.updateError('Invalid password');
                this.showError = true;
            }
        }
        else {
            console.log('invalid regex password');
            console.log(this.props.password);
            this.props.updateError('Invalid password');
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
                                            type="text" name="firstName" placeholder="Name" value={this.props.firstName} />

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
                                            type="text" name="lastName" placeholder="Last Name" value={this.props.lastName} />

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
                                            type="email" name="email" placeholder="username@portal.com" value={this.props.email} />

                                    </Col>
                                </Row>
                            </FormGroup>
                            <FormGroup>
                                <Row>
                                    <Col md={4}>
                                        <Label className="register-label"><small className='font-weight-bold'>ROLE PROFILE</small></Label>
                                    </Col>
                                    <Col md={7}>
                                        <Input required onChange={(e) => { this.props.updateFields(e.target) }} type="select" name="roleProfile" value={this.props.roleProfile}>
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
                                            type="number" name="userID" placeholder="User ID" value={this.props.userID} />

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
                                            type="password" name="password" placeholder="Enter Password" value={this.props.password} />

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
                                            type="password" name="confirmPassword" placeholder="Confirm" value={this.props.confirmPassword} />

                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={4}>
                                    </Col>
                                    <Col md={5}>
                                        {this.showError && <Alert className="p-1" color="danger"><small>{this.props.errorMessage}</small></Alert>}
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
                    <p id="copyright-tag">© COGNIZENT</p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: IState) => (state.register);
const mapDispatchToProps = {
    clearFields,
    updateError,
    updateFields
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterComponent);