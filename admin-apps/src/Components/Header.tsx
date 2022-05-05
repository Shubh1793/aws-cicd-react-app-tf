import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "../Assets/Images/logo.svg";
import Profile from "../Assets/Images/Profile.svg";
import AppTray from "../Assets/Images/AppTray.svg";

export default function Header() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>

          <Nav style={{ display: "flex", flexDirection: "row" }}>
            <Nav.Item style={{ marginRight: "1rem" }}>
              <img src={AppTray} alt="AppTray" />
            </Nav.Item>
            <Nav.Item>
              <img src={Profile} alt="Profile" />
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
