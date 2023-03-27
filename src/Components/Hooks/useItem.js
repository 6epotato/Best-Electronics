import { useEffect, useState } from "react";


const useItem = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://best-electronics-server.onrender.com/item') 
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return [items, setItems];
};

export default useItem;