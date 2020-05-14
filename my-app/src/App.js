import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
handleClick() {
    console.log(alert("milan"));
}
render() {
    return (
        <div className="App">
        <h1 id="weather">56</h1>
        <p>New York</p>
        <div className="cities">
            <button id="London" onClick={this.handleClick}>London</button>
            <button id="Dubai" onClick={this.handleClick}>Dubai</button>
            <button id="Milan" onClick={this.handleClick}>Milan</button>

        </div>  
        </div>
  );
}
}
export default App;
