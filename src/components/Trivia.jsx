import React, {useState, useEffect} from 'react'

function Trivia({data, setStop, questionNumber, setquestionNumber}) {

  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState('answer');
  const delay = (duration, callback) =>{
    setTimeout(() =>{
      callback();
    }, duration)
  }
  const handleClick = (answer) =>{
    setSelectedAnswer(answer);
    setClassName('answer active');
    delay(500, () => setClassName( answer.correct ? 'answer correct' : 'answer wrong') );
    delay(3000, () => {
      if(answer.correct){
        setquestionNumber(prev => prev + 1);
        setSelectedAnswer(null);
      }else{
        setStop(true)
      }
    } )
    
  }
  useEffect(() =>{
    setQuestion(data[questionNumber-1])
  },[data, questionNumber])
  return (
    <div className="trivia">
        <div className="question">{question?.question}</div>
        <div className="answers">
           {question?.answers.map((answer) =>(
           
            <div  className={selectedAnswer === answer ? className : 'answer'} onClick={() =>handleClick(answer)}>{answer.text}</div>
            
           ))}
            
        </div>
       
    </div>
  )
}

export default Trivia