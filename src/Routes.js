import React, {Component} from "react";

import {Route, NavLink, HashRouter} from "react-router-dom";

import Home from "./Home";
import About from "./About";

class Routes extends React.Component {
    render() {
        return (
            <div>
                <Route path="/home" component={Home}/>
                <Route path="/about" component={About}/>
            </div>
        )
    }
}

export default Routes;