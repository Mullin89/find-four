import "./CompletedSet.css"

export default function CompletedSet({group}){
    return (
        <div className="completedSet">
            <h3>Grouping</h3>
            <div className="completedWords">
                {group && group.map((word) => <p key={word}>{word + ", "} </p>)}
            </div>
        </div>
    )
}