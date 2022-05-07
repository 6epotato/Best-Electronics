import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import useItem from '../../Hooks/useItem';

const AddItem = () => {
    const navigte = useNavigate();
    const [user] = useAuthState(auth);
    const [items, setItems] = useItem({});
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {

        console.log(data);
        const url = `http://localhost:5000/item`;
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);

            })

        const addEmail = {
            email: user.email,
            data: data


        }
        axios.post('http://localhost:5000/addEmail', addEmail)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Your item has been set')
                }
            })
        navigte('/item')
    }


    return (
        <div className='w-50 mx-auto my-5 className="mb-3 placeholder"'>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className="mb-3" placeholder='Enter product name' {...register("name", { required: true, maxLength: 20 })} />
                <input className="mb-3" value={user?.email} disabled {...register("email")} />
                <input className="mb-3" placeholder='Enter supplier name' {...register("supplier", { required: true, maxLength: 20 })} />
                <input className="mb-3" placeholder='Enter description' {...register("description")} />
                <input className="mb-3" placeholder='Enter price' type="number" {...register("price")} />
                <input className="mb-3" placeholder='Enter quantity' type="number" {...register("quantity")} />
                <input className="mb-3" placeholder='Photo URL' type="text" {...register("img")} />
                <input className=' btn-outline-info' type="submit" value='Add Service' />
            </form>
        </div>
    );
};

export default AddItem;