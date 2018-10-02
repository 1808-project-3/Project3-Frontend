import * as React from 'react';
import { Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export class RegisterComponent extends React.Component {

    public submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('in submit');
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
                                    <Input type="text" name="first name" placeholder="Name" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col md={4}>
                                    <Label>LAST NAME</Label>
                                </Col>
                                <Col>
                                    <Input type="text" name="last name" placeholder="Last Name" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col md={4}>
                                    <Label>EMAIL ADDRESS</Label>
                                </Col>
                                <Col>
                                    <Input type="text" name="email address" placeholder="username@portal.com" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col md={4}>
                                    <Label>ROLE PROFILE</Label>
                                </Col>
                                <Col>
                                    <Input type="select" name="role profile" defaultValue='Select Role'>
                                        <option value='Select Role' disabled hidden>Select Role</option>
                                        <option value='2'>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
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
                                    <Input type="text" name="user id" placeholder="User ID" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col md={4}>
                                    <Label>PASSWORD</Label>
                                </Col>
                                <Col>
                                    <Input type="password" name="password" placeholder="Enter Password" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col md={4}>
                                    <Label>CONFIRM PASSWORD</Label>
                                </Col>
                                <Col>
                                    <Input type="password" name="confirm password" placeholder="Register" />
                                </Col>
                            </Row>
                        </FormGroup>
                    </Col>
                    <Button type="submit">REGISTER</Button>
                </Row>
            </Form>
        );
    }
}