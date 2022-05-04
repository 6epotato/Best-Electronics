import React from 'react';
import Banner from '../Banner/Banner';
import Items from '../Inventory/Items/Items';
import InventoryInfo from '../InventoryInfo/InventoryInfo';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <InventoryInfo></InventoryInfo>
        </div>
    );
};

export default Home;