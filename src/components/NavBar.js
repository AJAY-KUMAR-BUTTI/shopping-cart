import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function NavBar() {
 const cart = useSelector(state => state.cart.length);
  return (
    <Navbar bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" className='text-warning'>Redux Toolkit</Navbar.Brand>
          <Nav>
            <Nav.Link to='/' as={Link} className='text-warning'>products</Nav.Link>
          </Nav>
          <Navbar.Toggle />
          <Navbar.Collapse className='justify-content-end'>
            <Navbar.Text>
                <Nav.Link to='/cart' as={Link} className='text-light'>My Bag <span className='round'>{cart}</span></Nav.Link>
            </Navbar.Text>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
