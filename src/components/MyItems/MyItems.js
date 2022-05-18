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

        {
            items.map(item=> <div>{item.name} <button onClick={() => handleDelete(item._id)}>X</button> </div>)
        }
        </div>
    );
};

export default MyItems;