import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
const Login = () => {
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const handleSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.pass.value;

        signInWithEmailAndPassword(email, password);
        navigate('/');
    }
    return (
        <div>
            <div className='container w-50 mx-auto'>
        
            <h2 className='text-primary text-center mt-2'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail" >
                    <Form.Control  type="email" placeholder="Enter email" required name='email' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control  type="password" placeholder="Password" required name='pass' />
                </Form.Group>
                <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                    Login
                </Button>
            </Form>
         <p>New to Amar Stock? <Link to="/register" className='text-primary pe-auto text-decoration-none'>Please Register</Link> </p>
            <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none'>Reset Password</button> </p>
            
           <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
        </div>
    );
};

export default Login;