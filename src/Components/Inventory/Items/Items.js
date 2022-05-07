import React from 'react';
import { useNavigate } from 'react-router-dom';
import useItem from '../../Hooks/useItem';
import deleteButton from '../../Images/Icons/delete.png'
import './Items.css'

const Items = () => {

    const [items, setItems] = useItem();
    const navigate = useNavigate();

    const navigateToAddItem = () => {
        navigate('/additem');
    }
    const handleDelete = id => {
        const proceed = window.confirm('Are you Sure You want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/item/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = items.filter(item => item._id !== id);
                    setItems(remaining);
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
                            items.map(item => {
                                return (<tr>
                                    {/* <th scope="row">1</th> */}
                                    <td>{item.name}</td>
                                    <td><img style={{ width: "30px" }} src={item.img} alt="" /></td>
                                    <td>{item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.description}</td>
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




            {/* <div className='w-50 mx-auto'>
                {
                    items.map(item => <div key={item._id}>
                        <h4>{item.name}<button onClick={() => handleDelete(item._id)}>X</button></h4>

                    </div>)
                }
            </div> */}



            {/* <div className="items my-5">
                <div className="items-container">
                    {
                        items.map(item => <Item key={item._id} item={item}></Item>)
                    }


                </div>

            </div> */}

            <button onClick={() => navigateToAddItem()} type="button" className="btn  btn-outline-info d-grid col-6 my-5 mx-auto">Add Item</button>

        </div>
    );
};

export default Items;