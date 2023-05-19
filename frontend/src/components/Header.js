import React, {useRef, useEffect} from 'react'
import { Container, Row, Button } from 'reactstrap'
import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/images/components/logo.png'
import '../styles/components/header.css'

const nav__links = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/about',
    display: 'About'
  },
  {
    path: '/tours',
    display: 'Tours'
  }
]

const Header = () => {

  const headerRef = useRef(null)

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('sticky-header')
      }else{
        headerRef.current.classList.remove('sticky-header')
      }
    })
  }

  useEffect(() => {
    stickyHeaderFunc()
    return window.removeEventListener('scroll', stickyHeaderFunc)
  })
  return (
    <header className='header' ref={headerRef}>
      <Container>
        <Row>
          <div className='nav-wrapper d-flex align-items-center justify-content-between'>
            {/* logo */}
            <div className='logo'>
              <img src={logo} alt="" />
            </div>
            {/* logo end */}
            {/* menu start */}
            <div className="navigation">
              <ul className='menu d-flex align-items-center gap-5'>
                {nav__links.map((item, index) => (
                  <li className='nav-item' key={index}>
                    <NavLink to={item.path} className={navClass => navClass.isActive ? 
                    "active-link" : ""
                    }>{item.display}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
            {/* menu end */}
            <div className='nav-right d-flex align-items-center gap-4'>
              <div className='nav-btn d-flex align-items-center gap-4'>
                <Button className='btn secondary-btn'>
                  <Link to='/login'>Login</Link>
                </Button>
                <Button className='btn primary-btn'>
                  <Link to='/register'>Register</Link>
                </Button>
              </div>
              <span className='mobile-menu'>
                <i className='ri-menu-line'></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header