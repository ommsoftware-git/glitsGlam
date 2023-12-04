import React, { useState } from "react"
import "./Navbar.css"
import { Link,NavLink } from "react-router-dom"
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';


const Navbar = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  return (
    <>
      <nav className='navbar'>
      <NavLink className="navbar-brand" to="/"> <img src='images/logo.png' alt='' /></NavLink>
        <div className='container flex_space'>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? "fas fa-times" : " fas fa-bars"}></i>
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <Link to='/' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to='/products' onClick={closeMobileMenu}>
                All Products
              </Link>
            </li>
            <li>
              <Link to='/track-order' onClick={closeMobileMenu}>
                Tract Order
              </Link>
            </li>
            <li>
              <Link to='/review' onClick={closeMobileMenu}>
                Review Us
              </Link>
            </li>
            <li>
              <Link to='/blog' onClick={closeMobileMenu}>
                Blogs
              </Link>
            </li>
            <li>
              <Link to='/about' onClick={closeMobileMenu}>
                About us
              </Link>
            </li>
          
         
         
           
            <li>
              <Link to='/contact' onClick={closeMobileMenu}>
                Contact Us
              </Link>
            </li>
          </ul>

          <div className='login-area flex'>
         
          
            <li>
              <Link to='/log-in'>
                <button className='primary-btn'>Login</button>
              </Link>
            </li>
            <li>
            <Badge badgeContent={4} color="primary">
      <MailIcon color="action" />
    </Badge>
            </li>
          </div>
        </div>
      </nav>

      <header>
        <div className='container flex_space'>
          <div className='logo'>
            <img src='images/logo.png' alt='' />
          </div>

          <div className='contact flex_space '>
            <div className='box flex_space'>
              <div className='icons'>
                <i className='fal fa-clock'></i>
              </div>
              <div className='text'>
                <h4>Working Hours</h4>
                <Link to='/contact'>Monday - Sunday: 9.00am to 6.00pm</Link>
              </div>
            </div>
            <div className='box flex_space'>
              <div className='icons'>
                <i className='fas fa-phone-volume'></i>
              </div>
              <div className='text'>
                <h4>Call Us</h4>
                <Link to='/contact'>+011 123 4567</Link>
              </div>
            </div>
            <div className='box flex_space'>
              <div className='icons'>
                <i className='far fa-envelope'></i>
              </div>
              <div className='text'>
                <h4>Mail Us</h4>
                <Link to='/contact'>info@exampal.com</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
