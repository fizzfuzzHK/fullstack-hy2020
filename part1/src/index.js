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
    const [all, setAll] = useState(0)
    const [average, setAverage] = useState(0)
    const [positive,setPositive] = useState(0)

    const handleGood = () => {
        const newGood = good + 1
        const newAll = all + 1
        setGood(newGood)
        setAll(newAll)

        const newAverage = (newGood + bad * -1) / newAll
        setAverage(newAverage)

        const newPositive = (newGood/newAll) *100
        setPositive(newPositive)
    }

    const handleNeutral = () => {
        const newNeutral = neutral + 1
        const newAll = all + 1
        setNeutral(newNeutral)
        setAll(newAll)

        const newAverage = (good + bad * -1) / newAll
        setAverage(newAverage)

        const newPositive = (good/newAll) *100
        setPositive(newPositive)
    }

    const handleBad = () => {
        const newBad = bad + 1
        const newAll = all + 1
        setBad(newBad)
        setAll(newAll)

        const newAverage = (good + newBad * -1) / newAll
        setAverage(newAverage)

        const newPositive = (good/newAll) *100
        setPositive(newPositive)
    }

    // const average = () => {
    //     const newAverage = (good + bad * -1) / all
    //     setAverage(newAverage)
    // }

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
                <div>all {all}</div>
                <div>average {average}</div>
                <div>positive {positive}%</div>
            </div>

        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
