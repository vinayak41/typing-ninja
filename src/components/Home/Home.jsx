import React from 'react'
import './Home.css'

export default function Home({
    setTestBtnClicked
}) {
    return (
        <div className='home'>
                <div className="text-box">
                    <h1>What is your typing speed... ?</h1>
                </div>
                <button className='test-btn' onClick={() => setTestBtnClicked(true)}>Test Now</button>
                
        </div>
    )
}
