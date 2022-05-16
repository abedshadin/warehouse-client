import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';
const Inventory = () => {
    const { id } = useParams();
    const [inventory, setInventory] = useState({});

    useEffect( () =>{
        const url = `http://localhost:5000/inventory/${id}`;
        console.log(url);
        fetch(url)
        .then(res=> res.json())
        .then(data => setInventory(data));

    }, [])

    return (
        <div className='container'>
            <h2 className='text-center mt-2'>{inventory.name}</h2>
            <div className='text-center'><img src={inventory.img} alt="" height="350px" /></div>
            <p> <span className='bold'> Price:</span> {inventory.price} TK</p>
            <p><span className='bold'> Quantity:</span> {inventory.quantity} pcs</p>
            <p><span className='bold'> Supplier Name:</span> {inventory.s_name}</p>
            <p><span className='bold'> Description:</span> {inventory.s_desc}</p>
            
        </div>
    );
};

export default Inventory;