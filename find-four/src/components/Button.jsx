export default function Button({children, handleSubmit, type}){

function handleClick(){
    if (type === "Submit"){
        handleSubmit()
    }
}

    return (
        <button onClick={handleClick}>{children}</button>
    )
}