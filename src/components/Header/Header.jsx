import React from 'react'
import logo from './../../assets/ninja.png'
import './Header.css'
export default function Header() {
    return (
        <div className='header'>
            <div className="logo-container">
                <img src={logo} alt="ninja"/>
                <h1>TYPING NINJA</h1>
            </div>
        </div>
    )
}
