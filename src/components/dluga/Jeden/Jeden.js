import React from 'react';
import './Jeden.css';
const Jeden = (props)=> {
const {tempe, icons1} = props.weather
const ikonka = `http://openweathermap.org/img/w/${icons1}.png`

const time = new Date()
const week = time.getUTCDay()
let war=0

if(week+1 === 6)
war = 'Sob'
if(week+1 === 7)
war = 'Niedz'
if(week+1 === 1)
war = 'Pon'
if(week+1 === 2)
war = 'Wt'
if(week+1 === 3)
war = 'Śr'
if(week+1 === 4)
war = 'Czw'
if(week+1 === 5)
war = 'Pt'
if(week+1 === 0)
war = 'Niedz'
if(week+1 === 8)
war = 'Pon'
let tak = Math.floor(tempe)
    
    return(
        <div className="long">
        <h2>{tak}&deg;</h2>
        <div> <img src={ikonka} alt="ikona" width="60px"/></div>
        <h4>{war}</h4>
     </div>
    )
}

export default Jeden;