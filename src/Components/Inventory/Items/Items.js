import React from 'react';
import useItem from '../../Hooks/useItem';
import Item from '../../Inventory/Item/Item';
import './Items.css'

const Items = () => {

    const [items, setItems] = useItem();

    return (
        <div>
            <div className="items my-5">
                <div className="items-container">
                    {
                        items.map(item => <Item key={item._id} item={item}></Item>)
                    }

                </div>
            </div>



        </div>
    );
};

export default Items;