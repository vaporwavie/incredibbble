import React, { Component } from 'react';

import {HashRouter} from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Routes from "./components/Routes";
// import List from "./components/List";

class App extends Component {

    constructor() {
        super();
        this.state = {
            "shots": []
        };
    }

    componentDidMount() {
        const API = 'https://api.dribbble.com/v1/shots?access_token=080f41c09c3020e2c341b1a2c45a7e67c07dac1c0eca86b288c193e3c39eca15';
        fetch(API)
            .then(response => response.json())
            .then(responseData => {
                this.setState({shots: responseData});
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
    }
    render() {
        console.log(this.state.shots);
        return (
            <HashRouter>
                <div>
                    <Navbar/>
                    <div className="content">
                        <Routes/> {/* <List/> */}
                    </div>
                </div>
            </HashRouter>
        )
    }
}

export default App;