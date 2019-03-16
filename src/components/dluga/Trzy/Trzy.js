import React from 'react';

const Trzy = props =>{
   
    const {tempera, icons3} = props.weather
    const ikonka = `http://openweathermap.org/img/w/${icons3}.png`

    const time = new Date()
    const week = time.getUTCDay()
    let war=0
    
    if(week+3 === 6)
    war = 'Sob'
    if(week+3 === 7)
    war = 'Ndz'
    if(week+3 === 1)
    war = 'Pon'
    if(week+3 === 2)
    war = 'Wt'
    if(week+3 === 3)
    war = 'Śr'
    if(week+3 === 4)
    war = 'Czw'
    if(week+3 === 5)
    war = 'Pt'
    if(week+3 === 0)
    war = 'Niedz'
    if(week+3 === 8)
    war = 'Pon'
    if(week+3 === 9)
    war = 'Wt'
    if(week+3 === 10)
    war = 'Śr'

    let tak = Math.floor(tempera)
    
    return(
     <div className="long">
        <h2>{tak}&deg;</h2>
        <div> <img src={ikonka} alt="ikona" width="60px"/></div>
        <h4>{war}</h4>
     </div>
    )
}

export default Trzy;