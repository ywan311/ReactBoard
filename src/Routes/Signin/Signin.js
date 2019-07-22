import React from 'react';
import {Form,Button} from "react-bootstrap"


function Signin() {
    return (
        <Form>
        <Form.Group controlId ="formEmail">
            <Form.Label>E-Mail</Form.Label>
            <Form.Control type="eamil" placeholder="이메일을 입력해 주세요"></Form.Control>
            <Form.Text className="text-muted" value="중복될 수 없습니다."/>
        </Form.Group>
        <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"/>
        </Form.Group>
        <Button variant= "outline-primary">Submit</Button>
    </Form>

        );
}

export default Signin;