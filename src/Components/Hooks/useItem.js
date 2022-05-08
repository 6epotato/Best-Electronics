import { useEffect, useState } from "react";


const useItem = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://ancient-garden-83535.herokuapp.com/item')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return [items, setItems];
};

export default useItem;