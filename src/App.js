import React, { Component } from 'react';
import DaySection from "./components/DaySection";
import Carousel from "./components/Carousel";

import axios from 'axios';

import './App.css';


// Function to help chunk the data into seperate arrays representing each day
function arrayChunker(array, chunk) {
  var i, j, tempArray;
  var newArray = [];
  for (i=0,j=array.length; i<j; i+=chunk) {
      tempArray = array.slice(i,i+chunk);
      newArray.push(tempArray);
  }
  return newArray;
}

class App extends Component {
  state = {
    city: '', 
    dayChunks: [],
    dates: [],
    showCarousel: false
  };

  getWeatherData = async city => {
    //console.log(`getting weather data for ${city}`);

    await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city},US&units=imperial&appid=581268fb978a3330cfbfb8c780e67361`)
      .then(res => { 
        this.setState({ 
          city: res.data.city.name,
          dayChunks: arrayChunker(res.data.list, 8),
          dates: [],
          datesMinMax: [],
        });
      })

      // Initialize an array that stores the dates for each day for display purposes
    let days = [];
    let dayMinMax = [];

    // Loop through each Day
    this.state.dayChunks.forEach(chunk => {
      // get the current day in the form of MM/DD
      let currentDay = `${chunk[0].dt_txt.substr(5,2)}/${chunk[0].dt_txt.substr(8,2)}`;
      // add the current day to the days array
      days.push(currentDay);

      // Initialize an array that stores all of a single Day's temperatures
      let temps = [];
      // push the mins and maxes of each 3 hour chunk into an array for EACH day since they don't give us that general info
        
      chunk.forEach(e => { 
        temps.push(e.main.temp_min);
        temps.push(e.main.temp_max);
      });
      // sort the temperatures 
      temps.sort();
      dayMinMax.push([temps[0], temps[temps.length - 1]]);
      // console.log(`day ${currentDay} min: ${temps[0]} and max: ${temps[temps.length - 1]}`);
    })

    this.setState({ dates: days, datesMinMax: dayMinMax });
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    let dayForecast;
      
    let bgImage = 'https://source.unsplash.com/collection/1550580';
      
    if (this.state.dates) {
      dayForecast = this.state.dates.map((day, index) => (
        <DaySection key={index} dayNumber={index+1} day={day} min={Math.round(this.state.datesMinMax[index][0])} max={Math.round(this.state.datesMinMax[index][1])} />
      ))
    } else dayForecast = <p>Could not get weather data...</p>;
    
    return (
      <div className="App" style={{ backgroundImage: 'url(' + bgImage + ')' }}>
        <div className="contentArea">
        <h1>The Forecast</h1>
        <p>Type in a city name to see the 5 day temprature forecast</p>
        <div className="search">
        <input placeholder="Enter city" onChange={this.onChange} name="city" value={this.state.city}/>
        <button onClick={() => {
            this.setState({showCarousel:true})
            this.getWeatherData(this.state.city)
            this.bgImage = 'https://source.unsplash.com/featured/Dallas,skyline';
        }}>
          GO
        </button>
        </div>
       {this.state.showCarousel ? <Carousel days={dayForecast} /> : null }
       </div>
      </div>
    );
  }
}


export default App;
