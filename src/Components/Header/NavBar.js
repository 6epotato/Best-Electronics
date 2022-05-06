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
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="/home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/item">Manage Inventory</Nav.Link>
              <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
            </Nav>
            <Nav>

              {
                user ?
                  <button onClick={handleSignout} type="button" class="btn btn-primary">Sign Out</button> :
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