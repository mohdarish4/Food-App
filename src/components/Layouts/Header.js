import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Logo from "../../assets/logo/logo.png";
import "../../styles/HeaderStyle.css";

const Header = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation();

  // Scroll Navbar Sticky
  const changeValueOnScroll = () => {
    const scrollValue = document?.documentElement?.scrollTop;
    setNav(scrollValue > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeValueOnScroll);
    return () => window.removeEventListener("scroll", changeValueOnScroll);
  }, []);

  // Close navbar collapse on route change (for mobile)
  useEffect(() => {
    const navCollapse = document.querySelector(".navbar-collapse");
    if (navCollapse?.classList.contains("show")) {
      navCollapse.classList.remove("show");
    }
  }, [location]);

  const HEADER_OFFSET = -80; // Adjust this value to match your header height

  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className={`${nav ? "sticky" : ""}`}>
        <Container>
          <Navbar.Brand>
            <Link to="/" className="logo">
              <img src={Logo} alt="Logo" className="img-fluid" />
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                as={ScrollLink}
                to="home"
                offset={HEADER_OFFSET}
                smooth={true}
                duration={200}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={ScrollLink}
                to="about"
                offset={HEADER_OFFSET}
                smooth={true}
                duration={200}
              >
                About
              </Nav.Link>
              <Nav.Link
                as={ScrollLink}
                to="menu"
                offset={HEADER_OFFSET}
                smooth={true}
                duration={200}
              >
                Our Menu
              </Nav.Link>
              <Nav.Link
                as={ScrollLink}
                to="shop"
                offset={HEADER_OFFSET}
                smooth={true}
                duration={200}
              >
                Shop
              </Nav.Link>
              <Nav.Link
                as={ScrollLink}
                to="blog"
                offset={HEADER_OFFSET}
                smooth={true}
                duration={200}
              >
                Blog
              </Nav.Link>
              <Nav.Link
                as={ScrollLink}
                to="contact"
                offset={HEADER_OFFSET}
                smooth={true}
                duration={200}
              >
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                <div className="cart">
                  <i className="bi bi-bag fs-5"></i>
                  <em className="roundpoint">0</em>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;
