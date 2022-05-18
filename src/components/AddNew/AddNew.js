import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';

const AddNew = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    
    const onSubmit = (data,event) => {
      
        const url = `http://localhost:5000/product`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result =>{
            console.log(result);
            alert('done')
            event.target.reset();
        } )
    };


    return (
        <div className='w-50 mx-auto'>
            <h2>Please add a Item</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
            <input className='mb-2' placeholder='email' type="text" value={user.email} hidden {...register("email")} />
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 50 })} />
                <textarea className='mb-2' placeholder='Short Description' {...register("s_desc")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='img' type="text" {...register("img")} />
                <input className='mb-2' placeholder='quantity' type="number" {...register("quantity")} />
                <input className='mb-2' placeholder='supplierL' type="text" {...register("s_name")} />
                <input type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddNew;