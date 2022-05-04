import React from 'react';
import { Image } from 'react-bootstrap';
import Login from '../../Images/Authentication/Login.jpg'

const LoginImage = () => {
    return (
        <div>
            <div>
                <Image src={Login} thumbnail style={{ border: "none" }} />
            </div>
        </div>
    );
};

export default LoginImage;