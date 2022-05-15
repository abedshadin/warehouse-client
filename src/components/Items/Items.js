import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const Items = () => {
    const [items,setItems] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/product")
        .then(res=>res.json())
        .then(data=>setItems(data));
    },[])
    return (
        <div className='row'>
             {
                items.map(item=><Item key={item._id} item={item}></Item>)
            }
        </div>
    );
};

export default Items;