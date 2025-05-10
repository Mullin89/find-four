import './Modal.css'
import { useRef, useEffect } from 'react'

export default function Modal(){

    const modal = useRef()
    
    useEffect(() => {
        modal.current.showModal()
      }, []);

    function handleClickPlay(){
        modal.current.close()
    }

    return (
        <dialog ref={modal} >
            <h1>Welcome to Find Four!</h1>
            <p>Win the game by finding the four matching groups of four before you run out of lives!</p>
            <button onClick={handleClickPlay}>Play</button>
        </dialog>
    )
}