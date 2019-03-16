import React from 'react';
import lupa from './lupa.png';
import './Szukaj.css';

const Szukaj = props => {
    return(
        <form onSubmit={props.submit}>
        <div className="qwe">
            <input type="text"  placeholder="Wpisz miasto" 
            onChange={props.change} />
            <button onChange={props.change}> <img src={lupa} alt="lupa" className="lupa tlo"/></button>
            </div>
        </form>
    )
}

export default Szukaj;