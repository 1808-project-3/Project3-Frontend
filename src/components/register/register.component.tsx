import * as React from 'react';
import { IRegisterState, IState } from '../../reducers';
import { connect } from 'react-redux';
import { updateFields } from '../../actions/register/register.actions';
import { Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { RouteComponentProps } from 'react-router';

interface IProps extends RouteComponentProps<{}>, IRegisterState {
    updateFields: (event: any) => any
}

export class RegisterComponent extends React.Component<IProps, {}> {

    public submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('in submit');
        // const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        // if(re.test(String(this.props.email).toLowerCase())){
        //     console.log('valid email');
        // }
        // else {
        //     console.log('invalid email');
        // }
    }

    public handleChange = (e: any) => {
        console.log(e.target.name);
        console.log(e.target.value);
    }

    public render() {
        return (

            <Form onSubmit={this.submit}>
                <h1>TALENT PORTAL</h1>
                <h3>REGISTER</h3>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <Row>
                                <Col md={4}>
                                    <Label>FIRST NAME</Label>
                                </Col>
                                <Col>
                                    <Input required onChange={(e) => { this.props.updateFields(e.target) }}
                                        type="text" name="firstName" placeholder="Name" value={this.props.firstName}/>
                                   
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col md={4}>
                                    <Label>LAST NAME</Label>
                                </Col>
                                <Col>
                                    <Input required onChange={(e) => { this.props.updateFields(e.target) }}
                                        type="text" name="lastName" placeholder="Last Name" value={this.props.lastName}/>
                                    
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col md={4}>
                                    <Label>EMAIL ADDRESS</Label>
                                </Col>
                                <Col>
                                    <Input required onChange={(e) => { this.props.updateFields(e.target) }}
                                     type="email" name="email" placeholder="username@portal.com" value={this.props.email}/>
                                    
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col md={4}>
                                    <Label>ROLE PROFILE</Label>
                                </Col>
                                <Col>
                                    <Input required onChange={(e) => { this.props.updateFields(e.target) }} type="select" name="roleProfile" value ={this.props.roleProfile}>
                                        <option value='' hidden>Select Role</option>
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
                                    <Label>CREATE USER ID</Label>
                                </Col>
                                <Col>
                                    <Input required onChange={(e) => { this.props.updateFields(e.target) }}
                                     type="text" name="userID" placeholder="User ID" value={this.props.userID}/>
                                     
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col md={4}>
                                    <Label>PASSWORD</Label>
                                </Col>
                                <Col>
                                    <Input required onChange={(e) => { this.props.updateFields(e.target) }}
                                     type="password" name="password" placeholder="Enter Password" value={this.props.password}/>
                                     
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col md={4}>
                                    <Label>CONFIRM PASSWORD</Label>
                                </Col>
                                <Col>
                                    <Input required onChange={(e) => { this.props.updateFields(e.target) }} 
                                    type="password" name="confirmPassword" placeholder="Register" value={this.props.confirmPassword}/>
                                    
                                </Col>
                            </Row>
                        </FormGroup>
                    </Col>
                </Row>
                <Button type="submit">REGISTER</Button>
            </Form>
        );
    }
}

const mapStateToProps = (state: IState) => (state.register);
const mapDispatchToProps = {
    updateFields
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterComponent);