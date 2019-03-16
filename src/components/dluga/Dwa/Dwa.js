import React from 'react';

const Dwa = props =>{

    const {temper ,icons2} = props.weather
    const ikonka = `http://openweathermap.org/img/w/${icons2}.png`

    const time = new Date()
const week = time.getUTCDay()
let war=0

if(week+2 === 6)
war = 'Sob'
if(week+2 === 7)
war = 'Ndz'
if(week+2 === 1)
war = 'Pon'
if(week+2 === 2)
war = 'Wt'
if(week+2 === 3)
war = 'Śr'
if(week+2 === 4)
war = 'Czw'
if(week+2 === 5)
war = 'Pt'
if(week+2 === 0)
war = 'Niedz'
if(week+2 === 8)
war = 'Pon'
if(week+2 === 9)
war = 'Wt'
let tak = Math.floor(temper)
    
    return(
        <div className="long">
        <h2>{tak}&deg;</h2>
        <div> <img src={ikonka} alt="ikona" width="60px"/></div>
        <h4>{war}</h4>
     </div>
    )
}

export default Dwa;