import React, { useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import SearchOverlay from "./SearchOverlay";

function CustomNavbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <Navbar bg="white" expand="lg" className="border-bottom fixed-top">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="/images/logo.jpg"
              height="30"
              className="d-inline-block align-top"
              alt="4BEE Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#new">HÀNG MỚI VỀ</Nav.Link>
              <Nav.Link href="#shirts">ÁO SƠ MI</Nav.Link>
              <Nav.Link href="#sale">KHUYẾN MÃI</Nav.Link>
              <Nav.Link href="#about">VỀ CHÚNG TÔI</Nav.Link>
            </Nav>
            <Nav className="nav-icons">
              <Nav.Link onClick={() => setIsSearchOpen(true)}>
                <FontAwesomeIcon icon={faSearch} />
              </Nav.Link>
              <NavDropdown
                title={<FontAwesomeIcon icon={faUser} />}
                id="user-dropdown"
                align="end"
              >
                <NavDropdown.Item href="#account">
                  Tài khoản của tôi
                </NavDropdown.Item>
                <NavDropdown.Item href="#login">Đăng nhập</NavDropdown.Item>
                <NavDropdown.Item href="#wishlist">
                  Danh sách yêu thích
                </NavDropdown.Item>
                <NavDropdown.Item href="#register">
                  Tạo tài khoản
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#cart">
                <FontAwesomeIcon icon={faShoppingCart} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}

export default CustomNavbar;
