import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }

  return (
    <div>
      button press history : {props.allClicks.join('')}
    </div>
  )
}

const Button = (props) => {
  
  debugger
  console.log(props)
  const {onClick,text} = props
    return(
    <button onClick={onClick}>
      {text}
      </button>
    )
}

const App = (props) => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks,setAll] = useState([])
   
  const handleLeftClicks = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClicks = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <>
      <div>
        <div>
          {left}
          <Button onClick={handleLeftClicks} text="left"/>
          <Button onClick={handleRightClicks} text="right"/>
          {right}
          <History allClicks={allClicks} />
        </div>
     </div>
    </>
  )
}
  

ReactDOM.render(<App />, document.getElementById('root'))


