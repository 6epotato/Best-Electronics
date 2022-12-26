import React from 'react';
import Banner from '../Banner/Banner';
import InventoryInfo from '../InventoryInfo/InventoryInfo';
import useItem from '../Hooks/useItem'
import '../Inventory/Items/Items'
import HomePageInventory from '../Inventory/HomePageInventory/HomePageInventory';
import { useNavigate } from 'react-router-dom';
import stock from '../Images/Icons/inventory.png'
import 'bootstrap/dist/js/bootstrap.bundle';


const Home = () => {
    const [items, setItems] = useItem();
    const slicedItems = items.slice(0, 6);
    //navigate to manage inventory
    const navigate = useNavigate();
    const navigateToManageInventory = () => {
        navigate('/item')
    }

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
            <div className=' container d-flex justify-content-end'>
                <button onClick={() => navigateToManageInventory()} type="button" className="btn  btn-outline-info">
                    <img className='pe-2' src={stock} alt="" />
                    Manage Inventory</button>
            </div>


            <InventoryInfo></InventoryInfo>
        </div>
    );
};

export default Home;