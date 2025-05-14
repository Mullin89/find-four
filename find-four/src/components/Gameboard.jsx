import Tile from "./Tile"
import { useState } from "react"
import { wordData } from "../assets/wordData"
import Button from "./Button"
import './Gameboard.css'


export default function Gameboard(){

const [selectedWords, setSelectedWords] = useState([])

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
        
        words[0].remove()
        words[1].remove()
        words[2].remove()
        words[3].remove()

        setSelectedWords([])

    } else if (selectedWords.length < 4){
        console.log("Please select 4 words")
    } else {
        console.log("Those words are not linked, please try again!")
    }
}

    return (
        <div id="gameboard">
            {wordData.map((words) => words.map((word) => <Tile selectedWords={selectedWords} tileSelect={handleTileSelect} tileDeselect={handleTileDeselect} key={word.word} group={word.key} word={word.word}></Tile>)
            )}
        <Button handleSubmit={handleSubmit} type="Submit">Submit</Button>
        <Button>Clear</Button>
        </div>
    )
}