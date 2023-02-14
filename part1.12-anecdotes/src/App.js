import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
    'aaaaaaaaaaaaaaa'
  ]
   
const [selected, setSelected] = useState(0)
const [arrVotes,setArrVotes] = useState(new Array(anecdotes.length).fill(0))

const randomSelected = () => {
  setSelected(Math.floor(Math.random() * anecdotes.length))
}
const addVote = () => {
  const votesCopy = [...arrVotes];
  votesCopy[selected] += 1;
  setArrVotes(votesCopy);
};

  const bigArr = Math.max(...arrVotes)
  const biganec =arrVotes.indexOf(bigArr)
  
  console.log(arrVotes)

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>Has {arrVotes[selected]} Votes </p>
      <button onClick={addVote}>Vote </button>
      <button onClick={randomSelected}>Next Anecdote</button>
      <h2>Anecdote with most votes</h2>
      <p>{bigArr}  Votes  ----  {anecdotes[biganec]}</p>
      
    </div>
  )
}

export default App