import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import useItem from '../../Hooks/useItem';
import deleteButton from '../../Images/Icons/delete.png'

const MyItem = () => {
    const { itemId } = useParams();
    const [user] = useAuthState(auth);
    const [items, setItems] = useItem();
    const [Myitems, setItem] = useState([]);
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


    const handleDelete = id => {
        const proceed = window.confirm('Are you Sure You want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/addEmail/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = Myitems.filter(item => item._id !== id);
                    setItem(remaining);
                })
        }
    }
    return (
        <div>
            <div className='table-responsive-sm'>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Display Picture</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Myitems.map(item => {
                                return (<tr>
                                    {/* <th scope="row">1</th> */}
                                    <td>{item.data.name}</td>
                                    <td><img style={{ width: "30px" }} src={item.data.img} alt="" /></td>
                                    <td>{item.data.price}</td>
                                    <td>{item.data.quantity}</td>
                                    <td>{item.data.description}</td>
                                    <td><button type="button" className="btn btn-danger" onClick={() => handleDelete(item._id)}>
                                        <img src={deleteButton} alt="" />
                                    </button></td>
                                </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyItem;