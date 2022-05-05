import React from 'react';
import Banner from '../Banner/Banner';
import InventoryInfo from '../InventoryInfo/InventoryInfo';
import useItem from '../Hooks/useItem'
import Item from '../Inventory/Item/Item';
import '../Inventory/Items/Items'
import HomePageInventory from '../Inventory/HomePageInventory/HomePageInventory';

const Home = () => {
    const [items, setItems] = useItem();
    const slicedItems = items.slice(0, 6);

    return (
        <div>
            <Banner></Banner>
            <h1 className='my-5 text-center'>Inventory</h1>
            <div className="items my-5">
                <div className="items-container">
                    {

                        slicedItems.map(item => <HomePageInventory
                            key={items._id}
                            item={item}
                        >
                        </HomePageInventory>
                        )}

                </div>
            </div>


            <InventoryInfo></InventoryInfo>
        </div>
    );
};

export default Home;