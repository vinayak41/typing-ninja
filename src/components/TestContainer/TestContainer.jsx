import React from 'react'
import PopupResult from '../PopupResult/PopupResult'
import TestBox from '../TestBox/TestBox'
import Timer from '../Timer/Timer'
import ResultCard from './../ResulCard/ResultCard'
import './TestContainer.css'

export default function TestContainer({
    setUserInput,
    letterElementArray,
    handleBackspace,
    timeRemaining,
    startTimer,
    result,
    resetDefault,
    userInput

}) {
    return (
        <div className='test-container'>
            <div className="test-container-top">
                <ResultCard title={'Gross WPM'} value={result.grossWPM} />
                <ResultCard title={'Net WPM'} value={result.netWPM} />
                <ResultCard title={'Accurecy'} value={result.accurecy} />
                <Timer timeRemaining={timeRemaining}/>
            </div>
            <TestBox
                setUserInput={setUserInput}
                letterElementArray={letterElementArray}
                handleBackspace={handleBackspace}
                startTimer={startTimer}
                userInput={userInput}
             />
             { !(timeRemaining > 0)  ? <PopupResult result={result} resetDefault={resetDefault}/> : ''}
             
        </div>
    )
}
