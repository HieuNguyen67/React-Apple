import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./body.scss";
import React, { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import Logo from "../assets/image/Logo1.png";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import ScrollIndicator from "./ScrollIndicator";
import { motion, useAnimation } from "framer-motion";
import "./custom.scss"

const Header = (props) => {
   const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);


  return (
    <>
      {" "}
      <div>
        {" "}
        <ScrollIndicator />
        <Navbar
          expand="lg"
          className={colorChange ? "navbar colorChange" : "navbar"}
          fixed="top"
        >
          {" "}
          {/* #f8f9fa */}
          <Container className="my-2">
            <NavLink to="/" className=" decorate ">
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
              <Navbar.Offcanvas placement="end" className="offcanvas-size-sm">
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Store</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="d-flex justify-content-center  align-items-center sidebar">
                  <Nav className="d-flex   align-items-center align-items-center  mx-auto  ">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <NavLink
                        className="nav-link "
                        to="/"
                        href="#"
                        style={({ isActive, isPending, isTransitioning }) => {
                          return {
                            fontWeight: isActive ? "bold" : "",
                            borderBottom: isActive ? "2px solid Navy" : "",
                            color: isPending ? "red" : "black",
                            viewTransitionName: isTransitioning ? "slide" : "",
                          };
                        }}
                      >
                        {" "}
                        Apple
                      </NavLink>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <NavLink
                        className="nav-link "
                        to="/About"
                        href="#"
                        data-bs-dismiss="offcanvas"
                        style={({ isActive, isPending, isTransitioning }) => {
                          return {
                            fontWeight: isActive ? "bold" : "",
                            borderBottom: isActive ? "2px solid Navy" : "",
                            color: isPending ? "red" : "black",
                            viewTransitionName: isTransitioning ? "slide" : "",
                          };
                        }}
                      >
                        About
                      </NavLink>
                    </motion.div>
                  </Nav>
                  <div className=" mt-5 mt-md-0 pt-5 pt-md-0">
                    <div className="d-flex flex-grow mx-1 mt-5 mt-md-0 pt-5 pt-md-0">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                      >
                        <NavLink
                          href="#"
                          to="/user"
                          className="sidebar decorate"
                        >
                          <Button
                            className="mx-2 shadow"
                            variant="outline-danger"
                          >
                            Login
                          </Button>{" "}
                        </NavLink>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                      >
                        <NavLink
                          href=""
                          className="sidebar decorate "
                          to="/SignUp"
                        >
                          <Button className="shadow" variant="secondary">
                            SignUp
                          </Button>{" "}
                        </NavLink>
                      </motion.div>
                    </div>
                  </div>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};
export default Header;
