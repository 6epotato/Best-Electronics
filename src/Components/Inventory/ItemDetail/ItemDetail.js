import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const ItemDetail = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/item/${itemId}`;


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

        const url = `http://localhost:5000/item/${itemId}`;
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

        const url = `http://localhost:5000/item/${itemId}`;
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

    return (
        <>

            <div className='d-flex justify-content-center my-5'>

                <div className="card" style={{ width: "18rem" }}>
                    <img src={item.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <h6 className="card-title">{item.price}</h6>
                        <h6 className="card-title">{item.quantity}</h6>
                        <p className="card-text">{item.supplier}</p>
                        <p className="card-text">{item.description}</p>
                        <button onClick={() => handleDeliverd()} type="button" className="btn btn-primary">Deliverd</button>
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
                    <button type="submit" class="btn btn-primary">Restoke</button>

                </form>

            </div>
        </>
    );
};

export default ItemDetail;