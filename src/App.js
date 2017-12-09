import React, { Component } from 'react';
import axios from 'axios';

import {HashRouter} from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Routes from "./components/Routes";
import ShotsList from "./components/shots-list/ShotsList";

import "./App.css";

class App extends Component {

    constructor() {
        super();
        this.state = {
            "shots": []
        };
    }

    componentDidMount() {
        const API = 'https://api.dribbble.com/v1/shots?access_token=080f41c09c3020e2c341b1a2c45a7e67c07dac1c0eca86b288c193e3c39eca15';
        axios.get(API)
        .then(response => {
            this.setState({
                shots: response.data
            })
        })
        .catch(error => {
            console.log("Error while parsing Dribbble API. Debug: ", error);
        })
    }
    render() {
        console.log(this.state.shots);
        return (
            <HashRouter>
                <div>
                    <Navbar/>
                    <div className="content">
                        <Routes/>
                        <ShotsList data={this.state.shots}/>
                    </div>
                </div>
            </HashRouter>
        )
    }
}

export default App;