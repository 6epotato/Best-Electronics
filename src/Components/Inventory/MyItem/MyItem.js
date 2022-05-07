import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyItem = () => {
    const [user] = useAuthState(auth);
    const [item, setItem] = useState([]);
    useEffect(() => {
        const getEmail = async () => {
            const email = user.email;
            const url = `http://localhost:5000/addEmail?email=${email}`;
            const { data } = await axios.get(url);
            setItem(data);
        }
        getEmail();

    }

        , [user])
    return (
        <div>
            <h1>Yours item {item.length}</h1>
        </div>
    );
};

export default MyItem;