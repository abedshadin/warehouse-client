import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Item from '../Item/Item';

const Items = () => {
    const [loading, setLoading] = useState(false)
    const [items,setItems] = useState([]);
   
    useEffect(()=>{
        setLoading(true);
        fetch("http://localhost:5000/product")
        .then(res=>res.json())
        .then(data=>{

            setItems(data)
            setLoading(false)
          })
    },[])
   
    return (
       
        <div className='container mt-4'>
            <h2 className='text-center'>Our Products</h2>
            <div className='row gy-4'>
            
          {
              loading ? <div className='text-center'><Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner></div>: <> {
                items.map(item=><Item key={item._id} item={item}></Item>)
            }
         </>
          }
            </div>
        </div>
        
    );
};

export default Items;