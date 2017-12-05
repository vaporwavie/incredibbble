import React from "react";
import './styles/navbar.css';

import {NavLink} from "react-router-dom";

class Navbar extends React.Component {
    render() {
        return (
            <ul className="menu">
                <h1>
                    <NavLink to="/">Incredibbble</NavLink>
                </h1>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <form action="/">
                        <input type="text" placeholder="Search shots (press ENTER to search)"/>
                    </form>
                </li>
            </ul>

        )
    }
}

export default Navbar;