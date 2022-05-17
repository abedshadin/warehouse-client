import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItems = () => {
    const [items,setitems] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(()=>{
        fetch('http://localhost:5000/product')
        .then(res=>res.json())
        .then(data=>setitems(data));
    },[])
    console.log(user.email)
    return (
        <div className='container'>
           <h1 className='text-center'>My Items</h1>

            {
              items.map(item=>{
                 if(user.email==item.email){
                     <p>{item.name}</p>
                 }
              })
                 
            }
        </div>
    );
};

export default MyItems;