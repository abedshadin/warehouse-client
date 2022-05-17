import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import "./Header.css";
const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    }
    return (
        <div>
             <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/">Amar Stock</Navbar.Brand>
    <Nav className="ms-auto">
      <Link className='link' to="/">Home</Link>
      {
                                user && <>
                                <Link className='link' as={Link} to="/addNew">Add Items</Link>
                                <Link className='link' as={Link} to="/mngInventory">Manage Items</Link>
                                <Link className='link' as={Link} to="/myitems">My Items</Link>
                          
                                </>
                            }
                           
      <Link className='link' to="/blogs">Blogs</Link>
      <Link className='link' to="/about">About</Link>
      {
                                user ?
                                    <button className=' link bg-dark border-0' onClick={handleSignOut}>sign out</button>
                                :
                                <Link className='link' as={Link} to="/login">
                                Login
                            </Link>}
    </Nav>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;