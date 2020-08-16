import React from 'react'
import ReactDOM, { render } from 'react-dom';
import courses from './components/courses'

const Halfstack = ({courses}) => {
  return (
    <>
      <Header course={courses} />
      <Content parts={courses.parts} />
      <Total  parts={courses.parts} />  
    </>
  )
}

const Node = ({courses}) => {
  return (
    <>
      <Header course={courses} />
      <Content parts={courses.parts} />
      <Total  parts={courses.parts} /> 
    </>
  )
}

const Header = ({course}) => {
  return (
    <h1>{course.name}</h1>
    )
  }

const Content = ({parts}) => {
  return (
  <div>
      {parts.map((x) => 
      <Part key={parts.id} x={x}/>)}
  </div>
  )
}

const Part = ({x}) => {
  return (
      <p>
        {x.name} {x.exercises}
      </p> 
  )
}

const Total = ({parts}) => {
  console.log(parts[0].exercises);
  
  const total = Object.values(parts).reduce((sum, {exercises}) => sum+exercises,0)
  
  return (
    <div>
     <p>Number of exercises {total}</p>
    </div>
  )
}

const App = () => {

  return (
    <div>
      <Halfstack courses={courses[0]}/>
      <Node courses={courses[1]}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))