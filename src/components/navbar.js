import React from 'react'
import { Link } from "gatsby"

const Navbar = () => (
    <nav className="navbar">
        <ul>
            <Link to="/collection/pullover">
            <li>PULLOVERS</li>
            </Link>
            <li>ZIP-UPS</li>
            <li>T-SHIRTS</li>
            <li>NEW</li>
        </ul>
    </nav>
)

export default Navbar