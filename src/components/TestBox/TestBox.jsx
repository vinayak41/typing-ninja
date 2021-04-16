import React from 'react'
import './TestBox.css'


export default function TestBox({
    setUserInput,
    letterElementArray,
    handleBackspace,
    startTimer,
    userInput
}) {
    
    const handleTextInput = (e) => {
        setUserInput(e.target.value);
        startTimer();
    }
    return (
        <div className='test-box'>
            <div className="test-text">
                <p>{letterElementArray}</p>
            </div>
            <textarea value={userInput} onChange={handleTextInput} onKeyDown={(e) => handleBackspace(e)} className="typing-area" placeholder='start typing ...'></textarea>
        </div>
    )
}
