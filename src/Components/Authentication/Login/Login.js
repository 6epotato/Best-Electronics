import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    // using ref for input value
    const emailRef = useRef('');
    const passwordRef = useRef('');

    // handle the submit button
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
    }

    // use navigate to register page
    const navigate = useNavigate();
    const navigateRegister = () => {
        navigate("/register")
    }
    return (
        <div>
            <br />
            <br />
            <br />
            <h2 className='text-center text-info mt-5'>Welcome Back</h2>
            <Form style={{ width: "80%", marginLeft: "10%", marginTop: "10%" }} onSubmit={handleSubmit}>
                <Form.Group >
                    <Form.Label className='my-2'>Enter your email</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter your email" required />
                </Form.Group>
                <Form.Group >
                    <Form.Label className='my-2'>Enter your password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Enter your password" required />
                </Form.Group>
                <Button className='mt-2' type="submit">Submit</Button>
            </Form>
            <p className='my-2'>New to My website?? <Link to={'/register'} className='pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;