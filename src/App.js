import React from "react";

import {HashRouter} from "react-router-dom";

import Navbar from "./components/Navbar";
import Routes from "./components/Routes";

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