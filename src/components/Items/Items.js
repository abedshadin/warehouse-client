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
        <div className='container mt-4'>
            <h2 className='text-center'>Our Products</h2>
            <div className='row gy-4'>
             {
                items.map(item=><Item key={item._id} item={item}></Item>)
            }
            </div>
        </div>
    );
};

export default Items;