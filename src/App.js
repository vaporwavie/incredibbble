import React, {Component} from "react";

import {Route, NavLink, HashRouter} from "react-router-dom";

import About from "./About";
import Navbar from "./Navbar";
import Routes from "./Routes";

class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Navbar/>
                    <div className="content">
                        <Routes/>
                    </div>
                </div>
            </HashRouter>
        )
    }
}

export default App;