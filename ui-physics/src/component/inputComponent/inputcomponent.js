import React from 'react';
import './inputcomponent.css';

const Input =props=>{
    return(
        
            <div class="inputComponent">
            <label>{props.label}</label>
            <input type="text" placeholder={props.holder} required></input>
            </div>

    )
}
export default Input