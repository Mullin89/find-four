import Tile from "./Tile"
import CompletedSet from "./CompletedSet"
import { useState } from "react"
import Button from "./Button"
import './Gameboard.css'


export default function Gameboard({randomWords}){

const [selectedWords, setSelectedWords] = useState([])
const [completedOne, setCompletedOne] = useState(false)
const [completedTwo, setCompletedTwo] = useState(false)
const [firstGroup, setFirstGroup] = useState([])
const [secondGroup, setSecondGroup] = useState([])

function handleTileSelect(word, group){
    const newWords = [...selectedWords, {
        group: group,
        word: word
    }]
    setSelectedWords(newWords);
}

function handleTileDeselect(word){
    const newWords = selectedWords.filter((selectedWord) => selectedWord.word !== word )
    setSelectedWords(newWords)
}

function handleSubmit(){
    if(selectedWords.length === 4 && selectedWords[0].group === selectedWords[1].group && selectedWords[0].group === selectedWords[2].group && selectedWords[0].group === selectedWords[3].group){
        console.log("Correct")

        const words = document.querySelectorAll(".selected")

        words[0].classList.add("hidden")
        words[1].classList.add("hidden")
        words[2].classList.add("hidden")
        words[3].classList.add("hidden")

        words[0].classList.remove("selected")
        words[1].classList.remove("selected")
        words[2].classList.remove("selected")
        words[3].classList.remove("selected")

        if (!completedOne){
            setFirstGroup([words[0].innerText, words[1].innerText, words[2].innerText, words[3].innerText])
            setCompletedOne(true)
            console.log(completedOne)
        } else if (completedOne && !completedTwo){
            setSecondGroup([words[0].innerText, words[1].innerText, words[2].innerText, words[3].innerText])
            setCompletedTwo(true)
        }
        
        
        setSelectedWords([])

    } else if (selectedWords.length < 4){
        console.log("Please select 4 words")
    } else {
        console.log("Those words are not linked, please try again!")
    }
}

    return (
        <div id="gameboard" className={`${completedOne} && "completedOne"`}>
            {completedOne && <CompletedSet group={firstGroup} />}
            {completedTwo && <CompletedSet group={secondGroup} />}
            {randomWords.map((word) => <Tile selectedWords={selectedWords} tileSelect={handleTileSelect} tileDeselect={handleTileDeselect} key={word.word} group={word.key} word={word.word}></Tile>)
            }
            <Button handleSubmit={handleSubmit} type="Submit">Submit</Button>
            <Button>Clear</Button>
        </div>
    )
}