import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Header.css";
const Header = () => {
    return (
        <div>
             <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Amar Stock</Navbar.Brand>
    <Nav className="ms-auto">
      <Link className='link' to="/">Home</Link>
      <Link className='link' to="/login">Login</Link>
      <Link className='link' to="/register">Register</Link>
      <Link className='link' to="/blogs">Blogs</Link>
      <Link className='link' to="/about">About</Link>
    </Nav>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;