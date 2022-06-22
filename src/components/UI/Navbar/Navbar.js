import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Navbar.css'

import logo from '../../../Assets/img/logo.png'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand navbar-light mynav">
            {/* <span className="navbar-brand" ><img className="nav-logo" alt="SortSimple_logo" src={logo} /></span> */}
            <h3 className='navbar-brand' style={{marginLeft:"40px",fontSize:"40px"}}>Sorting Visualizer</h3>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav">
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
