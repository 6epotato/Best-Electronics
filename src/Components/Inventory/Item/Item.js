import React from 'react';

const Item = ({ item }) => {
    const { name, img, price, quantity, supplier, description } = item;
    return (
        <div>
            <div className="card">
                <img className="card-img-top" src={img} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-title">{price}</h6>
                    <p className="card-text">{quantity}</p>
                    <p className="card-text">{supplier}</p>
                    <p className="card-text">{description}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>

        </div>
    );
};

export default Item;