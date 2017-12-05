import React from "react";

import {HashRouter} from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Routes from "./components/Routes";
import List from "./components/List";

class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Navbar/>
                    <div className="content">
                        <Routes/>
                        <List/>
                    </div>
                </div>
            </HashRouter>
        )
    }
}

export default App;