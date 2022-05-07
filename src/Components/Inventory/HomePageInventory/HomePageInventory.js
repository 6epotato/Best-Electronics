import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePageInventory = ({ item }) => {
    const { _id, name, img, price, quantity, supplier, description } = item;
    const navigate = useNavigate();
    const nevigateToServiceDetail = _id => {
        navigate(`/item/${_id}`)
    }
    return (
        <div>
            <div className="card" style={{ width: "22rem" }}>
                <img className="card-img-top" src={img} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-title"><b>Price:</b> ${price}</h6>
                    <p className="card-text"><b>Quantity:</b> {quantity}</p>
                    <p className="card-text"><b>Supplier Name:</b> {supplier}</p>
                    <p className="card-text"><b>About:</b> {description}</p>
                    <button onClick={() => nevigateToServiceDetail(_id)} type="button" className="btn  btn-outline-info">Update</button>
                </div>
            </div>
        </div>
    );
};

export default HomePageInventory;