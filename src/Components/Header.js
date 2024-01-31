import React from 'react'
import './Navbar.css'
import { GoChevronDown } from "react-icons/go";
// import logo from '../../public/images/logo.png'

function Header() {
    return (
        <div className='Navbar_container'>
            <div className="nav_left">
                <div className="logoimg">
                    <img src="/images/logo.png" alt="logo" width="100" height="35" />
                </div>
                <div className="navlinks">
                    <ul>
                        <li>Our Plans </li>
                        <li>About Us <GoChevronDown /></li>
                        <li>Our menus <GoChevronDown /></li>
                        <li>Gift Card <GoChevronDown /></li>
                        <li>Sustainiblity <GoChevronDown /></li>
                        <li>Hello Fresh Teams </li>
                    </ul>
                </div>
            </div>
            <div className="nav_Right">
                <div className="login_SignUp_Btn">
                    <button>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Header
