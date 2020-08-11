import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
    return (
        <button onClick={props.onClick}>{props.text}</button>
    )
}

const App = () => {

    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGood = () => {
        const newGood = good + 1
        setGood(newGood)
    }

    const handleNeutral = () => {
        const newNeutral = neutral + 1
        setNeutral(newNeutral)
    }

    const handleBad = () => {
        const newBad = bad + 1
        setBad(newBad)
    }

    return (
        <div>
            <div>
                <h1>give feedback</h1>
                <Button onClick={handleGood} text="good" />
                <Button onClick={handleNeutral} text="neutral" />
                <Button onClick={handleBad} text="bad" />
            </div>
            <div>
                <h1>statistics</h1>
                <div>good {good}</div>
                <div>neutral {neutral}</div>
                <div>bad {bad}</div>
            </div>

        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
