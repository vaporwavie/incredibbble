import React, {Component} from "react";

import {Route, NavLink, HashRouter} from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar"

class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Navbar/>
                    <div className="content">
                        <Route path="/home" component={Home}/>
                        <Route path="/about" component={About}/>
                    </div>
                </div>
            </HashRouter>
        )
    }
}

export default App;