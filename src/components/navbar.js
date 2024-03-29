import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => (
    <nav className="navbar">
        <ul>
            <Link to="/collection/pullover">
            <li>PULLOVERS</li>
            </Link>
            <li>ZIP-UPS</li>
            <Link to="/collection/t-shirt">
            <li>T-SHIRTS</li>
            </Link>
            <Link to="/collection/t-shirt">
            <li>NEW</li>
            </Link>
        </ul>
    </nav>
)

export default Navbar