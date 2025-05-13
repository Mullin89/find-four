import Tile from "./Tile"
import { useState } from "react"
import { wordData } from "../assets/wordData"
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

    return (
        <div id="gameboard">
            {wordData.map((words) => words.map((word) => <Tile selectedWords={selectedWords} tileSelect={handleTileSelect} key={word.word} group={word.key} word={word.word}></Tile>)
            )}
        </div>
    )
}