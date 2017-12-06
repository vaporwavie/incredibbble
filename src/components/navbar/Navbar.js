import React from "react";

import './styles/navbar.css';

import {NavLink} from "react-router-dom";

class Navbar extends React.Component {
    render() {
        return (
            <ul className="menu">
                <h1>
                    <NavLink to="/">
                        Incredibbble
                        <img
                            className="dribbble-based"
                            src="https://image.flaticon.com/icons/svg/145/145801.svg"
                            alt="Fueled by Dribbble"/>
                    </NavLink>
                </h1>
                <li>
                    <a href="#">About</a>
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