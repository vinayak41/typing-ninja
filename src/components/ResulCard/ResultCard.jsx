import React from 'react'
import './ResultCard.css'

export default function ResultCard({
    title,
    value
}) {
    return (
        <div className='result-card'>
            <h4>{title}</h4>
            <h3>{(!value) ? '00' : value}</h3>
        </div>
    )
}
