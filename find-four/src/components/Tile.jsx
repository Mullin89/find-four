import './Tile.css'
import { useState } from 'react';

export default function Tile({word, group, tileSelect, selectedWords}){

    const [selected, setSelected] = useState(false)

    function handleClick(){
        if (selectedWords.length === 4){
            console.log("You can only select 4 words!")
        } else if (selected === true){
            setSelected(false)
        } else {
            setSelected(true)
            tileSelect(word, group)
        }
        
    }

    return (
        <div className={`tile ${selected && "selected"}`} onClick={handleClick}>{word}</div>
    )
}