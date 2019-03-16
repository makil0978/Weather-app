import React from 'react';
import './Wyniki.css';
import NE from './NE.png';
import N from './N.png';
import NW from './NW.png';
import W from './W.png';
import SW from './SW.png';
import S from './S.png';
import SE from './SE.png';
import E from './E.png';

const Wyniki = (props) => {

const { city, temp, wind, wind_direction, pressure , icon , err } = props.weather
const ikonka = `http://openweathermap.org/img/w/${icon}.png`
let pic
const time = new Date()
const week = time.getUTCDay()
let hour = time.getHours()
let min = time.getUTCMinutes()
let war = 0;
if(week === 6)
war = 'Sob'
if(week === 7)
war = 'Ndz'
if(week === 1)
war = 'Pon'
if(week === 2)
war = 'Wt'
if(week === 3)
war = 'Śr'
if(week === 4)
war = 'Czw'
if(week === 5)
war = 'Pt'
if(week === 0)
war = 'Niedz'
if(hour <10)
hour = '0' + hour 
if(min <10)
min = '0' + min
if(wind_direction>=338 || wind_direction<=23)
pic = N
if(wind_direction<338 && wind_direction>293)
pic = NW
if(wind_direction<=293 && wind_direction>=247)
pic = W
if(wind_direction<247 && wind_direction>203)
pic = SW
if(wind_direction<=203 && wind_direction>=158)
pic = S
if(wind_direction<158 && wind_direction>113)
pic = SE
if(wind_direction<=113 && wind_direction>=67)
pic = E
if(wind_direction<67 && wind_direction>23)
pic = NE

let tempp = Math.round(temp)
let wiind = Math.round(wind)

    return (
        <div className="dane">
        <div><img  src={ikonka} alt="ikona" width="60px"/>
        </div>
        <h1>{tempp}&deg;C</h1>
        <h2 className="big">{city}</h2>
        <h3>{war},{hour}:{min}</h3>
        <div className="wind">
        <h4>Prędkość wiatru: {wiind} km/h
        <img className="arrow" src={pic} alt="xdd" height="25px"/></h4>
        </div>
        <h4>Ciśnienie: {pressure} hPa</h4>
        <div>{err}</div>
        </div>
    )
}

export default Wyniki;