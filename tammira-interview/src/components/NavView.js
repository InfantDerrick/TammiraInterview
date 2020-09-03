import React from 'react';
import ReactDOM from 'react-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
function NavView(){
  return(
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Tammira</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
        </Nav>
      </Navbar>
    </>
  )


}
export default NavView;
