import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Item from '../Item/Item';

const Items = () => {
    const [spinner, setSpinner] = useState(false); 
    const [items,setItems] = useState([]);
    
    useEffect(()=>{
        
        fetch("http://localhost:5000/product")
        .then(res=>res.json())
        .then(data=>setItems(data));
        setSpinner(true);
    },[])
    
    return (
        <div className='container mt-4'>
            <h2 className='text-center'>Our Products</h2>
            <div className='row gy-4'>
             {
                items.map(item=><Item key={item._id} item={item}></Item>)
            }
          {
              spinner && <>
              <div className='text-center'>
             <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
            </div>
            </>
          }
            </div>
        </div>
    );
};

export default Items;