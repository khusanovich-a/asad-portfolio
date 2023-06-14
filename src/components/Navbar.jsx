import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "/src/styles/Navbar.css";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import styled from "styled-components";

const MyLink = styled(Link)`
  text-decoration: none;
  margin: 0 1rem;
  &:hover {
    transition: 0.7s;
    font-size: 30px;
    color: white;
  }
`;

const NavbarComponent = () => {
  return (
    <div className="nav container-fluid bg-header">
      <Container>
        <Navbar className="text-white">
          <NavbarBrand href="/" className="brands">
            <img src="./images/heart.svg" alt="" />
            Asad
          </NavbarBrand>
          <div className="items">
            <NavItem>
              <NavLink href="/#projects" className="nav-links">
                Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <MyLink to={"/about"} className="nav-links">
                About
              </MyLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contacts" className="nav-links">
                Contact
              </NavLink>
            </NavItem>
          </div>
        </Navbar>
      </Container>
    </div>
  );
};

export default NavbarComponent;
