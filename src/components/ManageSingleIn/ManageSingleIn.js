import React from 'react';

const ManageSingleIn = ({item}) => {
    const {name,price,quantity} = item;
    return (
        <div className='border'>
           
               <span className='border'> {name}</span>
               <span className='border'> {price}</span>
              <span className='border'>  {quantity}</span>
            
        </div>
    );
};

export default ManageSingleIn;