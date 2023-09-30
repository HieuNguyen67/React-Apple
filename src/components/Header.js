import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./body.scss";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import React, { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import PhonelinkIcon from "@mui/icons-material/Phonelink";
import Logo from "../assets/image/Logo1.png";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  const location = useLocation();

  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary "
        bg="dark"
        data-bs-theme="dark"
        fixed="top"
      >
        <Container className="my-2">
          <NavLink to="/React-Apple" className=" decorate ">
            <Navbar.Brand to="/">
              <img
                alt=""
                src={Logo}
                width="40"
                height="40"
                className="d-inline-block justify-content-center  align-items-center mb-2"
              />{" "}
              Review Official
            </Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Navbar.Offcanvas placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Store</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="d-flex justify-content-center  align-items-center sidebar ">
                <Nav className="d-flex   align-items-center align-items-center  mx-auto  ">
                  <NavLink className="nav-link" to="/React-Apple" href="#">
                    Apple
                  </NavLink>
                  <NavLink className="nav-link" to="1" href="#">
                    SamSung
                  </NavLink>
                  <NavLink className="nav-link" to="/Xiaomi" href="#">
                    Xiaomi
                  </NavLink>
                  <NavLink className="nav-link" to="3" href="#">
                    Oppo
                  </NavLink>
                </Nav>
                <div className=" mt-5 mt-md-0 pt-5 pt-md-0">
                  <div className="d-flex flex-grow mx-1 mt-5 mt-md-0 pt-5 pt-md-0">
                    <NavLink href="#" to="/user" className="sidebar decorate">
                      <Button className="mx-2 shadow" variant="outline-danger">
                        Login
                      </Button>{" "}
                    </NavLink>
                    <NavLink href="" className="sidebar decorate " to="/SignUp">
                      <Button className="shadow" variant="secondary">
                        SignUp
                      </Button>{" "}
                    </NavLink>
                  </div>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;
