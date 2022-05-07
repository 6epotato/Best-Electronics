import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LoginUser from '../Login/LoginUser';
import LoginImage from '../LoginImage/LoginImage';

const Fullpage = () => {
    return (
        <div>
            <Container>
                <Row className="landing my-5">
                    <Col xs={{ span: 12, order: 2 }} md={6} ><LoginUser></LoginUser></Col>

                    <Col xs={{ span: 12, order: 1 }} md={6}> <LoginImage></LoginImage></Col>
                </Row>

            </Container>

        </div>
    );
};

export default Fullpage;