import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';

const AddNew = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    
    const onSubmit = (data,event) => {
      
        const url = `https://rocky-plateau-64241.herokuapp.com/product`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result =>{
          
            toast('Product Added')
            event.target.reset();
        } )
    };


    return (
        <div className='w-50 mx-auto'>
            <h2>Please add a Item</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
            <input className='mb-2' placeholder='email' type="text" value={user.email} hidden {...register("email")} required/>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 50 })} required/>
                <textarea className='mb-2' placeholder='Short Description' {...register("s_desc")} required/>
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} required/>
                <input className='mb-2' placeholder='Image Link' type="text" {...register("img")} required/>
                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} required/>
                <input className='mb-2' placeholder='Supplier Name' type="text" {...register("s_name")} required/>
                <input type="submit" value="Add Item" />
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddNew;