import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import "./Register.css"
const Register = () => {
    return (
        <div className='register-form'>
        <h2 style={{ textAlign: 'center' }}>Please Register</h2>
        <form>
            <input type="text" name="name" id="" placeholder='Your Name' />

            <input type="email" name="email" id="" placeholder='Email Address' required />

            <input type="password" name="password" id="" placeholder='Password' required />
          
         
            
               
             
        </form>
        <p>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none' >Please Login</Link> </p>
        <SocialLogin></SocialLogin>
    </div>
    );
};

export default Register;