import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { NavDropdown,Nav,FormControl,Form,Button,Container } from 'react-bootstrap';
import './Navbar.css'
const Navbar1 = () => {
    return (
        <div>
            <Navbar bg="dark" expand="lg">
            <Container fluid >
              
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll" className="main-categories">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                  <Nav.Link style={{color:"white"}} href="/">Home</Nav.Link>
                  &nbsp
                  <Nav.Link  style={{color:"white"}}href="/product">Products</Nav.Link>
                  &nbsp
                  <NavDropdown title="Categories" id="navbarScrollingDropdown" style={{color:"white"}} >
                    <NavDropdown.Item href="#action3" >Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  &nbsp
                  <Nav.Link href="/contact" style={{color:"white"}}>
                    Contact Us
                  </Nav.Link>
                  &nbsp

                  {/* <Nav.Link href="/aboutus" style={{color:"white"}}>
                    About Us
                  </Nav.Link> */}
                </Nav>
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
    )
}

export default Navbar1
