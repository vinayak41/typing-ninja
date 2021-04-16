import React, { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import TestContainer from './components/TestContainer/TestContainer'
import { sampleParagraphs } from './data/SampleParagraphs'
import './App.css'


export default function App() {
    const maxTime = 60;
    const getParagraph = () => {
        return sampleParagraphs[Math.floor(Math.random() * sampleParagraphs.length)];
    }
    const [incorrectCharacters, setIncorrectCharacters] = useState(0);
    const [result, setResult] = useState({grossWPM: 0, netWPM: 0, accurecy: 0})
    const [timeRemaining, setTimeRemaining] = useState(maxTime);
    const [timerStarted, setTimerStarted] = useState(false)
    const [paragraph, setParagraph] = useState(getParagraph())
    const [letterElementArray, setLetterElementArray] = useState(paragraph.split("").map((letter, index) => { return <span key={index} className='not-attempted'>{letter}</span> }))
    const [userInput, setUserInput] = useState('');
    const [index, setIndex] = useState(-1);
    const [testBtnClicked, setTestBtnClicked] = useState(false);

    useEffect(() => {
        setIndex(userInput.length - 1);
    }, [userInput])

    const updateLetter = (className) => {
        let newLtterELementArray = [...letterElementArray];
        newLtterELementArray[index] = <span className={className} key={index}>{paragraph[index]}</span>;
        setLetterElementArray(newLtterELementArray);
    }

    useEffect(() => {
        if (index !== -1) {
            if (userInput[index] === paragraph[index]) {
                updateLetter('correct');
            } else if(letterElementArray[index].props.className !== 'incorrect') {
                updateLetter('incorrect');
                setIncorrectCharacters(prevIncorrectCharacters => prevIncorrectCharacters + 1);
            }
        }
    }, [index]);

    useEffect(()=> {
        let newGrossWPM = (userInput.length/5)/((maxTime-timeRemaining)/60);
        newGrossWPM = Math.floor(newGrossWPM * 100) / 100;
        let newNetWPM = newGrossWPM - (incorrectCharacters/5)/((maxTime-timeRemaining)/60);
        newNetWPM = Math.floor(newNetWPM * 100) / 100;
        let newAccurecy = ((userInput.length - incorrectCharacters)/userInput.length) * 100;
        newAccurecy = Math.floor(newAccurecy * 100) / 100;
        setResult({grossWPM: newGrossWPM, netWPM: newNetWPM, accurecy: newAccurecy});
    }, [timeRemaining]);

    

    const handleBackspace = (e) => {
        if (e.keyCode === 8 && index >= 0) {
            if(letterElementArray[index].props.className === 'incorrect'){
                setIncorrectCharacters(prevIncorrectCharacters => prevIncorrectCharacters - 1)
            }
            updateLetter('not-attempted');
        }
    }
    const startTimer = () => {
        if(!timerStarted){
            let _timeRemaining = timeRemaining;
            const timer = setInterval(()=> {
               if(_timeRemaining > 0) { 
                   setTimeRemaining(prevTimeReamaining => prevTimeReamaining - 1);
                   _timeRemaining--; 
               } else {
                   clearInterval(timer)
               }
            }, 1000)
            setTimerStarted(true)
        }
    }

    const resetDefault = () => {
        const _paragraph = getParagraph();

        setParagraph(_paragraph);
        setLetterElementArray(_paragraph.split("").map((letter, index) => { return <span key={index} className='not-attempted'>{letter}</span> }));
        setIncorrectCharacters(0);
        setResult({grossWPM: 0, netWPM: 0, accurecy: 0});
        setTimeRemaining(maxTime);
        setTimerStarted(false);
        setUserInput('')

    }

    return (
        <div className="app">
            <Header />
            {!testBtnClicked ? (
                <Home
                    setTestBtnClicked={setTestBtnClicked}
                />
            ) : (
                <TestContainer
                    setUserInput={setUserInput}
                    letterElementArray={letterElementArray}
                    handleBackspace={handleBackspace}
                    timeRemaining={timeRemaining}
                    startTimer={startTimer}
                    result={result}
                    resetDefault={resetDefault}
                    userInput={userInput}
                />
            )}
        </div>
    )
}
