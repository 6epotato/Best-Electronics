import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../Images/Icons/google.png'

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    if (error) {
        return (
            <div>
                <p className='text-danger'>Error: {error.message}</p>
            </div>
        );
    }
    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            <button onClick={() => signInWithGoogle()} type="button"
                className="btn  btn-outline-danger d-grid col-6 my-5 mx-auto">
                <div className='d-flex justify-content-center align-items-center'>
                    <img style={{ height: "20px" }} className='px-3' src={google} alt="" />
                    <p className='mt-2 ' > Google Login</p>
                </div></button>

        </div>
    );
};

export default SocialLogin;