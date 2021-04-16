import React from 'react'
import './Timer.css'

export default function Timer({
    timeRemaining
}) {
    return (
        <div className='timer'>
            00:{timeRemaining > 9 ? timeRemaining : `0${timeRemaining}`}
        </div>
    )
}
