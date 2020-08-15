import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
    if (props.onClicked) {
        return(
            <> 

                <h1>statistics</h1>
                <table>
                <tr>
                <td>good</td>
                <td>{props.good}</td>
                </tr>
                <tr>
                <td>neutral</td>
                <td>{props.neutral}</td>
                </tr>
                <tr>
                <td>bad</td>
                <td>{props.bad}</td>
                </tr>
                <tr>
                <td>all</td>
                <td>{props.all}</td>
                </tr>
                <tr>
                <td>average</td>
                <td>{props.average}</td>
                </tr>
                <tr>
                <td>positive</td>
                <td>{props.positive}%</td>
                </tr>
                </table>
            </>
        )
    }
    else{
        return (
            <>
                <h1>statistics</h1>
                <div>No feedback given</div>
            </>
        )
    }
}
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
    const [onClicked,setOnClicked] = useState(false)

    const handleGood = () => {
        const newGood = good + 1
        const newAll = all + 1
        setGood(newGood)
        setAll(newAll)

        const newAverage = (newGood + bad * -1) / newAll
        setAverage(newAverage)

        const newPositive = (newGood/newAll) *100
        setPositive(newPositive)

        setOnClicked(true)
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

        setOnClicked(true)

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

        setOnClicked(true)

    }

    const statisticsProps = {
        good:good,
        bad:bad,
        all:all,
        neutral:neutral,
        average:average,
        positive:positive,
        onClicked:onClicked
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
                <Statistics {...statisticsProps} />
            </div>

        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
