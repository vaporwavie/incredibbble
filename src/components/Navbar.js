import React from "react";

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