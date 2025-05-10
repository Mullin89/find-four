import Tile from "./Tile"
import { wordData } from "../assets/wordData"
import './Gameboard.css'


export default function Gameboard(){

    return (
        <div id="gameboard">
            {wordData.map((words) => words.map((word) => <Tile key={word.word} group={word.key} word={word.word}></Tile>)
            )}
        </div>
    )
}