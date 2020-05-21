import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
handleClick(event) {
    console.log(event.target.id);
    var city = event.target.id;
    var country = event.target.dataset.country;
    console.log(country);
    fetch(`https://api.weatherbit.io/v2.0/current?city=${city}&country=${country}&units=i&key=8f9ffdb9a3bb404bb103448a39657671`)
        .then(function(response){
            return response.json();
        })
        .then(function (response){
	        console.log(response);
        }
    );
}
render() {
    return (
        <div className="App">
        <h1 id="weather">56</h1>
        <p>New York</p>
        <div className="cities">
            <button id="London" data-country="UK" onClick={this.handleClick}>London</button>
            <button id="Dubai" data-country="AE" onClick={this.handleClick}>Dubai</button>
            <button id="Milan" data-country="IT" onClick={this.handleClick}>Milan</button>

        </div>  
        </div>
  );
}
}
export default App;
