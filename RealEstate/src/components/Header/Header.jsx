import React from 'react'
import "./Header.css"
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <section className="h-wrapper">
                <div className="flexCenter paddings innerWidth h-container">
                    <img src="./logo.png" alt="logo" width={100} />
                    <div className="flexCenter h-menu">
                        {/* <li>
                            <NavLink to="/residencies">Residence</NavLink>
                            </li> */}
                        {/* <NavLink to="values">Our Value</NavLink>
                        <NavLink to="">Contact Us</NavLink>
                        <NavLink to="">Get Started</NavLink> */}
                        {/* <button className="button">
                            <NavLink to="">Contact</NavLink>
                        </button> */}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Header
