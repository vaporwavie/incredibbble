import React from "react";

import {Route} from "react-router-dom";

import About from "./About";

class Routes extends React.Component {
    render() {
        return (
            <div>
                <Route path="/" />
                <Route path="/about" component={About}/>
            </div>
        )
    }
}

export default Routes;