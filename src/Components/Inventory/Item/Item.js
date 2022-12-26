import React from 'react';
import useItem from '../../Hooks/useItem';

const Item = ({ item }) => {
    const [items, setItems] = useItem();
    const { name, img, price, quantity, supplier, description } = item;

    const handleDelete = id => {
        const proceed = window.confirm('Are you Sure You wnat to delet?');
        if (proceed) {
            const url = `https://best-electronics-server.onrender.com/item/${id}`;
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
            <div className="card" style={{ width: "22rem" }}>
                <img className="card-img-top" src={img} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-title">{price}</h6>
                    <p className="card-text">{quantity}</p>
                    <p className="card-text">{supplier}</p>
                    <p className="card-text">{description}</p>
                    <button onClick={() => handleDelete(item._id)} type="button" className="btn btn-primary">Primary</button>
                </div>
            </div>

        </div>
    );
};

export default Item;