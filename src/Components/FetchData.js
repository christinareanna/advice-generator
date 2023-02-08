import { useState } from 'react';
import React from 'react';
import Dice from "./icon-dice.svg";
import Divider from "./pattern-divider.svg";

export default function Data() {

    const [advice, setAdvice] = useState({});
    const url = 'https://api.adviceslip.com/advice'

    const getAdvice = () => {
        fetch(url, {
            method: 'GET',
            cache: 'no-cache'
        }).then(response => response.json())
            .then(data => {
                setAdvice(data)
            })
    }
    return (
        <div className='main-container'>

            {typeof advice.slip === 'undefined' ? (
                <>
                    <div className='advice-container'>
                        <button className='top-btn' type="button" onClick={getAdvice}><img className="dice" alt="dice" src={Dice}></img></button>
                        <p>Click the dice for advice!</p>
                    </div>
                </>

            ) : (
                <>
                    <div className='advice-container'>
                        <p className='advice-number'>advice #{advice.slip.id}</p>
                        <p className='advice'>"{advice.slip.advice}"</p>
                        <div className='pause-container'>
                            <img className="pause" alt="pause divider" src={Divider}></img>
                        </div>
                    </div>
                    <button className='btn' type="button" onClick={getAdvice}><img className="dice-2" alt="dice" src={Dice}></img></button>
                </>
            )}
        </div>
    )
}