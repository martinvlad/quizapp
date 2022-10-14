import React, { useRef, useEffect } from 'react'
import {init} from 'ityped';
export default function Start({setUsername}) {
    const inputRef = useRef();
    const titleRef = useRef();
    useEffect(() =>{
      console.log(titleRef.current)
      init(titleRef.current, { showCursor: true, strings: ['Test your trivia skills!', 'Win up to 1 million!', 'Have fun and good luck!' ], })
    },[])
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
       <h1 className='rainbowtitle'><span ref={titleRef}></span></h1>
       <div className='start'>
        <input placeholder='Enter username..' className="startInput" ref={inputRef} onKeyDown={handleKeypress}/>
        <button className='startbutton' onClick={handleClick}>Start</button>
    </div>
    </>
  )
}
