import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ManageSingleIn from '../ManageSingleIn/ManageSingleIn';

const ManageInventory = () => {
    const [items,setItems] = useState([]);
    useEffect(()=>{
        fetch('https://rocky-plateau-64241.herokuapp.com/product')
        .then(res=>res.json())
        .then(data=>setItems(data))

    },[])
    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url = `https://rocky-plateau-64241.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
               
                const remaining = items.filter(iteml => iteml._id !== id);
                setItems(remaining);
            })
        }
    }
    return (
        <div>
            <div className='text-center'>
                <Link className='text-decoration-none btn btn-primary' to='/addNew'>Add New</Link>
            </div>
          <table className="table table-hover  table-striped table-bordered ml-4 ">
            <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
                
            </tr>
            </thead>
            <tbody>
            
            {
                items.map(item=> <tr key={item._id}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    <td><button className='btn btn-danger' onClick={() => handleDelete(item._id)}>Delete</button></td>
                    
                    </tr>)
            }
            </tbody>
        </table>
         
        </div>
    );
};

export default ManageInventory;