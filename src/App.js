import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "3037d720f7998f3e431361df31cd42cf";

class App extends React.Component {
  state = {
    temperature: null,
    city: null,
    country: null,
    humidity: null,
    description: null,
    error: null,
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?APPID=${API_KEY}&q=${city},${country}&units=metric`);
    const data = await api_call.json();
    if (city && country){
    this.setState({
      city: data.name,
      country: data.sys.country,
      temperature: data.main.temp,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: "",
    })
  } else {
    this.setState({
      city: null,
      country: null,
      temperature: null,
      humidity: null,
      description: null,
      error: "No values entered",
    })
  }
}
  render () {
    return (
      <div>
        <Header />
        <Form getWeather = {this.getWeather}/>
        {
          this.state.city && this.state.country ?
          <Weather
            temperature={this.state.temperature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}
             />
           :
           null
         }
      </div>
    );
  }
};

export default App;
