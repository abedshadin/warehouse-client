import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItems = () => {
    const [items,setitems] = useState([]);
    const [user] = useAuthState(auth);
    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = items.filter(iteml => iteml._id !== id);
                setitems(remaining);
            })
        }
    }
    useEffect(()=>{
        const email = user.email;
        fetch(`http://localhost:5000/myitems?email=${email}`)
        .then(res=>res.json())
        .then(data=>setitems(data));
    },[])
    console.log(user.email)
    return (
        <div className='container'>
           <h1 className='text-center'>My Items</h1>
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

export default MyItems;