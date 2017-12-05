import React, {Component} from "react";

import {Route, NavLink, HashRouter} from "react-router-dom";

import Home from "./Home";
import About from "./About";

class Navbar extends React.Component {
    render() {
        return (
            <ul className="menu">
                <h1>
                    <NavLink to="/home">Incredibbble</NavLink>
                </h1>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <form action="#">
                        <input
                            onClick={console.log("Search shots")}
                            type="text"
                            placeholder="Search shots (press ENTER)"/>
                    </form>
                </li>
            </ul>

        )
    }
}

export default Navbar;