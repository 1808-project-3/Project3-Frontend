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
                                    <Input onChange={(e) => { this.props.updateFields(e.target) }}
                                        type="text" name="first name" placeholder="Name" value={this.props.firstName}/>
                                   
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col md={4}>
                                    <Label>LAST NAME</Label>
                                </Col>
                                <Col>
                                    <Input onChange={(e) => { this.props.updateFields(e.target) }}
                                        type="text" name="last name" placeholder="Last Name" value={this.props.lastName}/>
                                    
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col md={4}>
                                    <Label>EMAIL ADDRESS</Label>
                                </Col>
                                <Col>
                                    <Input onChange={(e) => { this.props.updateFields(e.target) }}
                                     type="text" name="email address" placeholder="username@portal.com" value={this.props.email}/>
                                    
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col md={4}>
                                    <Label>ROLE PROFILE</Label>
                                </Col>
                                <Col>
                                    <Input onChange={(e) => { this.props.updateFields(e.target) }} type="select" name="role profile" defaultValue='Select Role' value ={this.props.roleProfile}>
                                        <option value='Select Role' disabled hidden>Select Role</option>
                                        <option value='competency lead'>Competency Lead</option>
                                        <option value='talent enablement lead'>Talent Enablement Lead</option>
                                        <option value='supervisor'>Supervisor</option>
                                        <option value='associate'>Associate</option>
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
                                    <Input onChange={(e) => { this.props.updateFields(e.target) }}
                                     type="text" name="user id" placeholder="User ID" value={this.props.userID}/>
                                     
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col md={4}>
                                    <Label>PASSWORD</Label>
                                </Col>
                                <Col>
                                    <Input onChange={(e) => { this.props.updateFields(e.target) }}
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
                                    <Input onChange={(e) => { this.props.updateFields(e.target) }} 
                                    type="password" name="confirm password" placeholder="Register" value={this.props.confirmPassword}/>
                                    
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