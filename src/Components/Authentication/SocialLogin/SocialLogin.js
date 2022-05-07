import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

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
                className="btn btn-primary d-grid col-6 my-5 mx-auto">Google Login</button>

        </div>
    );
};

export default SocialLogin;