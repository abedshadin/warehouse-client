
import React, { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';



import SocialLogin from '../SocialLogin/SocialLogin';
import auth from '../../firebase.init';
import { Button, Form } from 'react-bootstrap';

const Login = () => {
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
    auth
  );
    let navigate = useNavigate();
  let location = useLocation();
 
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [email,setEmail] = useState('');
      const [password,setPassword] = useState('');
      const [inError,setInError] = useState('');
      
      const handleEmail = (e) =>{
          setEmail(e.target.value);
      }
      const handlePassword = (e) =>{
          setPassword(e.target.value);
      }

      const handleLogin = (e) =>{
          e.preventDefault();
          signInWithEmailAndPassword(email,password);
          
        
          
      }
      const resetPassword=async() =>{
     
        if(email){
          await sendPasswordResetEmail(email);
          alert('Sent email');
        }
        else{
          alert('Please Enter Email')
        }
     
      }
      if(error){
        console.log(error.message);
      }
  useEffect(()=>{
    if(error){
      switch(error?.code){
        case "auth/wrong-password":
          toast('Wrong password')
          break;
        case "auth/user-not-found":
          toast('User not found')
          break;
          default:
          toast('Something Wrong')
      }
    }
  },[error])
   
    
      if(user){
        navigate(from, { replace: true });
      }
     
    return (
      
       
        <div>
            <div className='container w-50 mx-auto'>
        
            <h2 className='text-primary text-center mt-2'>Please Login</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail" >
                    <Form.Control  type="email" placeholder="Enter email" required name='email' onChange={handleEmail} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control  type="password" placeholder="Password" required name='pass' onChange={handlePassword} />
                </Form.Group>
                <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                    Login
                </Button>
            </Form>
         <p>New to Amar Stock? <Link to="/register" className='text-primary pe-auto text-decoration-none'>Please Register</Link> </p>
            <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
            
           <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
        </div>
      
    );
};

export default Login;