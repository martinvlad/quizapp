import React, { useRef } from 'react'

export default function Start({setUsername}) {
    const inputRef = useRef();
    const handleClick = () =>{
       inputRef.current.value &&  setUsername(inputRef.current.value)
    }
    const handleKeypress = e => {
        //it triggers by pressing the enter key
      if (e.keyCode === 13) {
        setUsername(inputRef.current.value)
      }
    };
  return (
   <>
       <h1 className='rainbowtitle'>Welcome to Trivia and good luck!</h1>
       <div className='start'>
        <input placeholder='Enter username..' className="startInput" ref={inputRef} onKeyDown={handleKeypress}/>
        <button className='startbutton' onClick={handleClick}>Start</button>
    </div>
    </>
  )
}
