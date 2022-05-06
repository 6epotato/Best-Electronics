import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const LoginUser = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleLogin = () => {
        signInWithEmailAndPassword(email, password)

    }

    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {
        return <p>Loading...</p>;
    }
    if (user) {
        navigate('/home');
    }
    return (
        <div>


            <div className="App">
                <h2 className='text-center text-info mt-5'>Please Login To Proceed</h2>

                <div className='d-flex flex-column'>
                    <input className="mb-3" placeholder='Enter Your Email'
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input className="mb-3" placeholder='Enter Your Password'
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className='btn-primary' onClick={() => handleLogin()}>
                        Sign In
                    </button>
                </div>
            </div>
            <div>
                <p>Already have an account? <Link to={'/register'} className='pe-auto text-decoration-none'>Please Register</Link></p>
            </div>
            <SocialLogin></SocialLogin>
        </div>


    );
};

export default LoginUser;