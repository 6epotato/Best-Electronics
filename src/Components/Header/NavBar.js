import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';


const NavBar = () => {


  const [user] = useAuthState(auth);
  const handleSignout = () => {
    signOut(auth);
  }
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
        <Container>
          <Navbar.Brand href="/home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home" className='text-white'
              >Home</Nav.Link>
              <Nav.Link as={Link} to="/blogs" className='text-white'>Blogs</Nav.Link>
            </Nav>
            <Nav>

              {
                user && <>
                  <Nav.Link as={Link} to="/item" className='text-white'>Manage Inventory</Nav.Link>
                  <Nav.Link as={Link} to="/myitem" className='text-white'>My Item</Nav.Link>
                  <Nav.Link as={Link} to="/additem" className='text-white'>Add Item</Nav.Link>
                </>
              }

              {
                user ?
                  <button onClick={handleSignout} type="button" class="btn btn-link text-decoration-none text-white">Sign Out</button> :
                  <Nav.Link as={Link} to="/login">
                    Login
                  </Nav.Link>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;