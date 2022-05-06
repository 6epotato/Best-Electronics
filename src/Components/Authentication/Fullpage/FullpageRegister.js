import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LoginImage from '../LoginImage/LoginImage';
import Register from '../Register/Register';
import SignIn from '../Register/SignIn';

const FullpageRegister = () => {
    return (
        <div>
            <Container>
                <Row className="landing my-5">
                    <Col xs={{ span: 12, order: 2 }} md={6} ><SignIn></SignIn></Col>

                    <Col xs={{ span: 12, order: 1 }} md={6}> <LoginImage></LoginImage></Col>
                </Row>
            </Container>
        </div>
    );
};

export default FullpageRegister;