import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

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

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    const handleLogin = () => {
        signInWithEmailAndPassword(email, password)

    }


    const resetPassword = async () => {
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('Please Enter Your Email Address')
        }
    }

    if (error) {
        return (
            <div>
                <p className='text-danger'>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {
        return <Loading></Loading>;
    }
    if (user) {
        navigate(from, { replace: true });

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
                <p>I Forgot my password <button className='btn btn-link pe-auto text-decoration-none' onClick={resetPassword}>Reset Passworde</button></p>
            </div>
            <SocialLogin></SocialLogin>

        </div>


    );
};

export default LoginUser;