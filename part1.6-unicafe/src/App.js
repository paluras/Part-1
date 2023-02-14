import { useState } from 'react'


const StatisticLine = (props) => {
    return(
            <tr>
                <td>{props.text}</td>
                <td>{props.value}</td>
            </tr>
    )
}

const Statistics=(props) =>{
  if(props.total === 0){
    return(
      <tbody>
        <tr>
          <td>
            No Data Info
          </td>
        </tr>
      </tbody>
    )
  }
  return(
      <tbody>
          <StatisticLine text = "good" value ={props.good} />
          <StatisticLine text = "neutral" value ={props.neutral} />
          <StatisticLine text = "bad" value ={props.bad} />
          <StatisticLine text = "avarage" value ={props.avarage} />
          <StatisticLine text = "positive" value ={props.positive+"%"}  />
      </tbody>
  )
}

const Buttons =(props) => {
  return(
    <div>
      <button onClick={props.toggleGood}>Good</button>
      <button onClick={props.toggleNeutral}>Neutral</button>
      <button onClick={props.toggleBad}>Bad</button>
    </div>
    )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  function toggleGood(){
    setGood(good + 1)
  }

  function toggleNeutral(){
    setNeutral(neutral + 1)
  }
  function toggleBad(){
    setBad(bad + 1)
  }

  let total = good + neutral + bad

  let avarage = (good + (neutral * 0) + (bad * -1)) / total ;

  let positive = (good/total) * 100  ;
   
  return (
    <div>
      <h1>Give FeedBack</h1>
      <div>
        <Buttons 
        toggleBad={toggleBad} 
        toggleGood={toggleGood}
        toggleNeutral={toggleNeutral}
        />
      </div>
      <h2>Statistics</h2>
      <table>
     
       <Statistics 
       total = {total}
       good = {good}
       neutral ={neutral}
       bad ={bad}
       avarage = {avarage}
       positive = {positive}
       />
          
       </table> 
    </div>
  )
}

export default App