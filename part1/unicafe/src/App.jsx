import { useState } from 'react'

const Header = ({text}) => {
  return (
    <h2>{text}</h2>
  )
}

const Button = ({handleClick, text}) => {

  console.log(handleClick)
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Statistic = ({text, value}) => {
  return (
    <div>{text}{value}</div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  // const [neutral, setNeutral] = useState(0)
  // const [bad, setBad] = useState(0)


  const handleClick = () => {
      console.log('click');
      console.log(good);
      setGood(good + 1)
  }

  return (
    <div>
      <Header name={"give feedback"} />
      <Button onClick={handleClick} text='good'/>
      <Header text="statistics" />
      <Statistic text='good' value={good}/>
    </div>
  )
}

export default App