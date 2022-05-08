import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import cart from "../../Images/Icons/shopping-cart.png"
import stock from "../../Images/Icons/inventory.png"
import restock from "../../Images/Icons/restock.png"


const ItemDetail = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `https://ancient-garden-83535.herokuapp.com/item/${itemId}`;


        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [item])

    //handle qantity deliver item 
    const handleDeliverd = () => {
        const oldQuantity = parseInt(item.quantity)
        const quantity = oldQuantity - 1;
        const updatedQuantity = { quantity };


        //send data to  server

        const url = `https://ancient-garden-83535.herokuapp.com/item/${itemId}`;
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedQuantity)

        })
            .then(res => res.json())
            .then(result => {
                console.log(result);

            })
    }

    //handle restoke button
    const handleRestokeItem = event => {
        event.preventDefault();
        const oldQuantity = parseInt(item.quantity)
        const restoke = parseInt(event.target.restoke.value)
        const quantity = oldQuantity + restoke;
        // console.log(quantity);
        const updatedQuantity = { quantity };


        //send data to  server

        const url = `https://ancient-garden-83535.herokuapp.com/item/${itemId}`;
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedQuantity)

        })
            .then(res => res.json())
            .then(result => {
                console.log(result);

            })
    }

    //navigate to manage inventory
    const navigate = useNavigate();
    const navigateToManageInventory = () => {
        navigate('/item')
    }

    return (
        <>

            <div className='d-flex justify-content-center my-5'>

                <div className="card" style={{ width: "18rem" }}>
                    <img src={item.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <h6 className="card-title"><b>Price: </b>${item.price}</h6>
                        <h6 className="card-title"><b>Quantity: </b>{item.quantity}</h6>
                        <p className="card-text"><b>Supplier Name: </b>{item.supplier}</p>
                        <p className="card-text"> <b>About: </b>{item.description}</p>
                        <button onClick={() => handleDeliverd()} type="button" className="btn  btn-info">
                            <img className='pe-2' src={cart} alt="" />
                            Deliverd</button>
                    </div>
                </div>
                {/* restoke form */}

            </div>
            <div >
                <form onSubmit={handleRestokeItem} className='w-25 mx-auto my-5'>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Add amount you want to restoke</label>
                        <input type="number" name='restoke' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>
                    <button type="submit" class="btn  btn-outline-info">
                        <img className='pe-2' src={restock} alt="" />
                        Restoke</button>

                </form>

            </div>
            <div className=' container d-flex justify-content-end my-5 w-50'>
                <button onClick={() => navigateToManageInventory()} type="button" className="btn btn-outline-info">
                    <img className='pe-2' src={stock} alt="" />
                    Manage All Inventory</button>
            </div>
        </>
    );
};

export default ItemDetail;