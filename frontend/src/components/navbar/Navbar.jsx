import React from 'react'
import './Navbar.css';
import Logo from '../../img/Logo.svg';
import Container from 'react-bootstrap/esm/Container';


function Navbar() {
  return (
    <div className='navbar flex flex-row px-5'>
        <div className='navbar_logo'>
          <img src={Logo} alt="Logo compensar" />
        </div>
        <div className='navbar_name flex flex-col'>

        </div>
        
    </div>
  )
}

export default Navbar
