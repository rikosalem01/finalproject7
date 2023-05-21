
import React, { useRef, useEffect, useContext } from "react";
import { Container, Row, Button } from "reactstrap";
import { NavLink, Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/components/logo.png";
import "../styles/components/header.css";
import { AuthContext } from "../context/AuthContext";

const nav_links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

const Header = () => {
  
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };
  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add("sticky-header");
      } else {
        headerRef.current.classList.remove("sticky-header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc()
    return window.removeEventListener('scroll', stickyHeaderFunc)
  })

  const toggleMenu = () => menuRef.current.classList.toggle('show-menu')

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav-wrapper d-flex align-items-center justify-content-between">
            {/* logo */}
            <div className="logo">
              <a href="home">
                <img src={logo} alt="" />
              </a>
            </div>
            {/* logo end */}
            {/* menu start */}
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <ul className="menu d-flex align-items-center gap-5">
                {nav_links.map((item, index) => (
                  <li className="nav-item" key={index}>
                    <NavLink to={item.path} className={(navClass) => (navClass.isActive ? "active-link" : "")}>
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            {/* menu end */}
            <div className="nav-right d-flex align-items-center gap-4">
              <div className="nav-btn d-flex align-items-center gap-4">
                {user ? (
                  <>
                    <h5 className="mb-0">Hi, {user.dataValues.username}</h5>
                    <Button className="btn btn-danger" onClick={logout}>
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button className="btn secondary-btn">
                      <Link to="/login">Login</Link>
                    </Button>
                    <Button className="btn primary-btn">
                      <Link to="/register">Register</Link>
                    </Button>
                  </>
                )}
              </div>
              <span className="mobile-menu" onClick={toggleMenu}>
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
