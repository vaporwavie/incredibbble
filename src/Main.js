import React, {Component} from "react";

import {Route, NavLink, HashRouter} from "react-router-dom";

import Search from "./Search";
import About from "./About";

class Main extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <ul className="menu">
                        <h1>Incredibbble</h1>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/search">Search</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                    </ul>
                    <div className="content">
                        <Route path="/search" component={Search}/>
                        <Route path="/about" component={About}/>
                    </div>
                </div>
            </HashRouter>
        )
    }
}

export default Main;