import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import "./Register.css"
const Register = () => {
    const navigate = useNavigate();

   
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    
    const handleRegister = async (event) => {
        event.preventDefault();
      
        const email = event.target.email.value;
        const password = event.target.password.value;
       

        await createUserWithEmailAndPassword(email, password);
     
        
        navigate('/');
    }
    return (
        <div className='register-form'>
        <h2 style={{ textAlign: 'center' }}>Please Register</h2>
        <form onSubmit={handleRegister}>
          

            <input type="email" name="email" id="" placeholder='Email Address' required />

            <input type="password" name="password" id="" placeholder='Password' required />
          
            <input
                    
                    className='w-50 mx-auto btn btn-primary mt-2'
                    type="submit"
                    value="Register" />
            
               
             
        </form>
        <p>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none' >Please Login</Link> </p>
        <SocialLogin></SocialLogin>
    </div>
    );
};

export default Register;