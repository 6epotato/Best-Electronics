import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firbase.init'


const Register = () => {

    // create user hook 
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    // using ref for input value
    const userRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');

    // handle the submit button
    const handleSubmit = event => {
        event.preventDefault();
        const user = userRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        createUserWithEmailAndPassword(email, password);

    }

    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate("/login")
    }
    return (
        <div>
            <h2 className='text-center text-info mt-5'>Please Register To Proceed</h2>
            <Form style={{ width: "80%", marginLeft: "10%", marginTop: "10%" }} onSubmit={handleSubmit}>
                <Form.Group >
                    <Form.Label className='my-2' >Enter your name</Form.Label>
                    <Form.Control ref={userRef} type="text" placeholder="Enter Your Name" />
                </Form.Group>
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
            <p className='my-2'>Already have an account? <Link to={'/login'} className='pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
        </div>
    );
};

export default Register;