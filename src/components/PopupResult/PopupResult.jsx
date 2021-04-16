import React from 'react'
import './PopupResult.css'
export default function PopupResult({
    result,
    resetDefault
}) {
    return (
        <div className="popup-box">
            <div className="box">
                <h1>Result</h1>
                <h3>Net WPM : {(result.netWPM) ? result.netWPM : '00'}</h3>
                <h3>Gross WPM : {(result.grossWPM) ? result.grossWPM : '00'}</h3>
                <h3>Accurecy : {(result.accurecy) ? result.accurecy : '00'}</h3>
                <button onClick={resetDefault}>Test Again</button>
            </div>
        </div>
    )
}
