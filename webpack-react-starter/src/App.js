import React, { Component } from 'react';
import './App.css';   

class App extends Component {

    render() {
        return (
        <div className="App">
            <Slider>
                {/* Slides */}
                <div> A </div>
                <div> B </div>
                <div> C </div>
            </Slider>
        </div>
        );
    }
} 

export default App;