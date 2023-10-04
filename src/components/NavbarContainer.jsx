import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Logout, fetchUserData } from "../app/slices/productSlice";

const NavbarContainer = () => {
  const { userData, cart } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  
  const logout = () => {
    dispatch(Logout());
  };
  

  useEffect(() => {
    dispatch(fetchUserData());
  }, [cart.length]);
  
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">E-COM</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1" as={Link} to={`/codsoft-ecom/`}>
              Home
            </Nav.Link>

            <Nav.Link as={Link} to={`/codsoft-ecom/productlist`}>
              Product List
            </Nav.Link>
          </Nav>
          <Nav>
            {userData.user ? (
              <NavDropdown
                title={userData.user || "User"}
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <>
                <Nav.Link href="#action1" as={Link} to={`/codsoft-ecom/login`}>
                  Login
                </Nav.Link>
                <Nav.Link href="#action1" as={Link} to={`/codsoft-ecom/signup`}>
                  Sign Up
                </Nav.Link>
              </>
            )}
            <Nav.Link as={Link} to={`/codsoft-ecom/cart`}>
              Cart
              <span> {cart.length}</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarContainer;
