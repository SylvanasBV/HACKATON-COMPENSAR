import React from 'react'
import './Navbar.css';
import Logo from '../../img/Logo.svg';
import { Link } from 'react-router-dom';
import img from '../../img/InicioSesion_Navbar.svg'


function Navbar() {
  return (
    <nav className="navcom">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <Link to={"/"} className="flex flex-row items-center justify-center space-x-3 decoration-transparent rtl:space-x-reverse">
          <div className="navbar_logo h-full">
            <img src={Logo} alt="Logo compensar" className="w-20" />
          </div>
          <div className="navbar_name flex flex-col ">
            <h2 className='m-0'>CONEXIA</h2>
            <h3>COMPENSAR</h3>
          </div>
        </Link>
        <div className='flex flex-row'>
          <div className="w-full md:block md:w-auto">
            <ul className="font-medium bg-transparent flex flex-col md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white md:dark:bg-gray-900 ">
              <li>
                <Link to={"/"} className="decoration-transparent block py-2 px-3 rounded text-gray-400 hover:text-gray-900 md:hover:bg-transparent md:border-0 md:p-0">
                  <p>
                    Home
                  </p>
                </Link>
              </li>
              <li>
                <Link to={"/"} className="decoration-transparent block py-2 px-3 rounded text-gray-400 hover:text-gray-900 md:hover:bg-transparent md:border-0 md:p-0">
                  <p>
                    Novedades
                  </p>
                </Link>
              </li>
              <li>
                <Link to={"/"} className="decoration-transparent block py-2 px-3 rounded text-gray-400 hover:text-gray-900 md:hover:bg-transparent md:border-0 md:p-0">
                  <p>
                    Foros
                  </p>
                </Link>
              </li>
              <li>
                <Link to={"/"} className="decoration-transparent block py-2 px-3 rounded text-gray-400 hover:text-gray-900 md:hover:bg-transparent md:border-0 md:p-0 ">
                  <p>
                    Tienda
                  </p>
                </Link>
              </li>
              <li>
              </li>
            </ul>
          </div>
          <button class="navcomp-button font-bold py-3 px-3 rounded flex gap-2 w-48 h-16 self-center items-center justify-center">
            <div className="navcomp-button-circle rounded-full h-11 w-11 bg-gray-300 flex items-center justify-center border-2 border-gray-600">
              <img src={img} className="w-[90%]" alt="icono inicio sesion" />
            </div>
            <p className='m-0'>Iniciar sesión</p>
          </button>
        
        </div>
      </div>
    </nav>
  )
}

export default Navbar
