import React, { Component } from 'react';
import './App.css';
import Szukaj from './components/szukaj/Szukaj';
import Wyniki from './components/wyniki/Wyniki';
import Jeden from './components/dluga/Jeden/Jeden';
import Dwa from './components/dluga/Dwa/Dwa';
import Trzy from './components/dluga/Trzy/Trzy';


class App extends Component {

state = {
  value: 'Pionki',
  date: '',
  city: '',
  temp: '',
  wind: '',
  wind_direction: '',
  pressure: '',
  icon: '',
  err: '',
  tempe: '',
  temper: '',
  tempera: '',
  icons: 'n',
}

handleInputChange = e =>{
  this.setState({
    value: e.target.value
  })
} 
componentDidMount(){
  const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=c2412d652238a66a1e38f853337efa5e&units=metric`

  const API1 = `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.value}&APPID=c2412d652238a66a1e38f853337efa5e&units=metric`

  
  fetch(API)
  .then(res =>{
    if(res.ok){
      return res
    }
    throw Error("Nie udało się")
  })
  .then(res =>res.json())
  .then(data => {
    console.log(data)
    const time = new Date().toLocaleString()
    this.setState({
      err: false,
      date: time,
      temp: data.main.temp,
      wind: data.wind.speed,
      wind_direction: data.wind.deg,
      pressure: data.main.pressure,
      icon: data.weather[0].icon,
      icons:'n'+ data.weather[0].icon,
      city: this.state.value,
    })
  })
  .catch(err => {
    console.log(err);
      this.setState({
        err: true,
        city:this.state.value
      })
})
fetch(API1)
.then(res =>{
  if(res.ok){
    return res
  }
  throw Error("Nie udało się")
})
.then(res =>res.json())
.then(main => {
  console.log(main)
  this.setState({
    tempe: main.list[8].main.temp,
    temper: main.list[16].main.temp,
    tempera: main.list[24].main.temp,
    icons1: main.list[8].weather[0].icon,
    icons2: main.list[16].weather[0].icon,
    icons3: main.list[24].weather[0].icon,
})
})
.catch(err => {
  console.log(err);
    this.setState({
      err: 'Nie ma takiego miasta',
      city:this.state.value
    })
})
}
hadnleCitySubmit = (e) => {
  e.preventDefault()
  console.log("potwierdzony");

  
  const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=c2412d652238a66a1e38f853337efa5e&units=metric`

  const API1 = `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.value}&APPID=c2412d652238a66a1e38f853337efa5e&units=metric`

  
  fetch(API)
  .then(res =>{
    if(res.ok){
      return res
    }
    throw Error("Nie udało się")
  })
  .then(res =>res.json())
  .then(data => {
    console.log(data)
    const time = new Date().toLocaleString()
    this.setState({
      err: false,
      date: time,
      temp: data.main.temp,
      wind: data.wind.speed,
      wind_direction: data.wind.deg,
      pressure: data.main.pressure,
      icon: data.weather[0].icon,
      icons:'n'+data.weather[0].icon,
      city: this.state.value,
    })
  })
  .catch(err => {
    console.log(err);
      this.setState({
        err: true,
        city:this.state.value
      })
})
fetch(API1)
.then(res =>{
  if(res.ok){
    return res
  }
  throw Error("Nie udało się")
})
.then(res =>res.json())
.then(main => {
  console.log(main)
  this.setState({
    tempe: main.list[8].main.temp,
    temper: main.list[16].main.temp,
    tempera: main.list[24].main.temp,
    icons1: main.list[8].weather[0].icon,
    icons2: main.list[16].weather[0].icon,
    icons3: main.list[24].weather[0].icon,
})
})
.catch(err => {
  console.log(err);
    this.setState({
      err: 'Nie ma takiego miasta',
      city:this.state.value
    })
})
}

  render() {
    return (
    <div className="App">
    <div className={this.state.icons}>
      <Szukaj value={this.state.value} change={this.handleInputChange} submit={this.hadnleCitySubmit}/>
      <Wyniki weather={this.state}/>
      <div className="dluga">
      <Jeden weather={this.state} />
      <Dwa weather={this.state}/>
      <Trzy weather={this.state}/>
      </div>
      </div>
    </div>
    );
  }
}
export default App;
