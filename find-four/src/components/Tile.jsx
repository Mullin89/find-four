import './Tile.css'

export default function Tile({word, group}){

    function handleClick(){
        console.log(word, group)
    }

    return (
        <div className="tile" onClick={handleClick}>{word}</div>
    )
}