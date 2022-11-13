import React from 'react'
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap'

function Header({searchValue,searchFun,searchOnChange,deleteFun}) {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">MERN Search</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="search different field"
              className="me-2"
              aria-label="Search"
              value={searchValue}
              onClick={deleteFun}
              onChange={searchOnChange}
            />
            <Button variant="outline-success mx-2" onClick={searchFun}>Search</Button>
            <Button variant="btn btn-danger" onClick={deleteFun}><i className='fa fa-trash'></i></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export {Header}