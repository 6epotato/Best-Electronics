import React from 'react';
import { useNavigate } from 'react-router-dom';
import useItem from '../../Hooks/useItem';
import Item from '../../Inventory/Item/Item';
import './Items.css'

const Items = () => {

    const [items, setItems] = useItem();
    const navigate = useNavigate();

    const navigateToAddItem = () => {
        navigate('/additem');
    }
    const handleDelete = id => {
        const proceed = window.confirm('Are you Sure You wnat to delet?');
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


            <div className='w-50 mx-auto'>
                {
                    items.map(item => <div key={item._id}>
                        <h4>{item.name}<button onClick={() => handleDelete(item._id)}>X</button></h4>

                    </div>)
                }
            </div>



            {/* <div className="items my-5">
                <div className="items-container">
                    {
                        items.map(item => <Item key={item._id} item={item}></Item>)
                    }


                </div>

            </div> */}

            <button onClick={() => navigateToAddItem()} type="button" className="btn btn-primary d-grid col-6 my-5 mx-auto">Add Item</button>

        </div>
    );
};

export default Items;