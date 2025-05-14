import Modal from './components/Modal'
import Gameboard from './components/Gameboard'
import { wordData } from './assets/wordData'
import shuffleArray from './components/randomiser'
import './App.css'

function App() {

  const randomWords = shuffleArray(wordData)
console.log(randomWords)

  return (
    <>
      <Modal/>
      <Gameboard randomWords={randomWords}/>
    </>
    
  )
}

export default App
