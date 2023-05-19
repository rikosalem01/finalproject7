import React, { useRef, useEffect, useContext } from "react";
import { Container, Row, Button } from "reactstrap";
import { NavLink, Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/components/logo.png";
import "../styles/components/header.css";
import { AuthContext } from "../context/AuthContext";

const nav__links = [
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
<<<<<<< Updated upstream
    window.addEventListener('scroll', () => {
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('sticky__header')
      }else{
        headerRef.current.classList.remove('sticky__header')
=======
    window.addEventListener("scroll", () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add("sticky-header");
      } else {
        headerRef.current.classList.remove("sticky-header");
>>>>>>> Stashed changes
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();
    return window.removeEventListener("scroll", stickyHeaderFunc);
  });
  const toggleMenu = () => menuRef.current.classList.toggle("show-menu");
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
<<<<<<< Updated upstream
          <div className='nav__wrapper d-flex align-items-center justify-content-between'>
=======
          <div className="nav-wrapper d-flex align-items-center justify-content-between">
>>>>>>> Stashed changes
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
                {nav__links.map((item, index) => (
<<<<<<< Updated upstream
                  <li className='nav__item' key={index}>
                    <NavLink to={item.path} className={navClass => navClass.isActive ? 
                    "active__link" : ""
                    }>{item.display}</NavLink>
=======
                  <li className="nav-item" key={index}>
                    <NavLink to={item.path} className={(navClass) => (navClass.isActive ? "active-link" : "")}>
                      {item.display}
                    </NavLink>
>>>>>>> Stashed changes
                  </li>
                ))}
              </ul>
            </div>
            {/* menu end */}
<<<<<<< Updated upstream
            <div className='nav__right d-flex align-items-center gap-4'>
              <div className='nav__btns d-flex align-items-center gap-4'>
                <Button className='btn secondary__btn'>
                  <Link to='/login'>Login</Link>
                </Button>
                <Button className='btn primary__btn'>
                  <Link to='/register'>Register</Link>
                </Button>
              </div>
              <span className='mobile__menu'>
                <i className='ri-menu-line'></i>
=======
            <div className="nav-right d-flex align-items-center gap-4">
              <div className="nav-btn d-flex align-items-center gap-4">
                {user ? (
                  <>
                    <h5 className="mb-0">Hi, {user.username}</h5>
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
>>>>>>> Stashed changes
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
