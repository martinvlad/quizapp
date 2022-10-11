import React, {useState, useEffect} from 'react'

function Trivia({data, setTimeout, questionNumber, setquestionNumber}) {

  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleClick = (answer) =>{
    setSelectedAnswer(answer);
  }
  useEffect(() =>{
    setQuestion(data[questionNumber-1])
  },[data, questionNumber])
  return (
    <div className="trivia">
        <div className="question">{question?.question}</div>
        <div className="answers">
           {question?.answers.map((answer) =>(
           
            <div key={answer.id} className="answer" onClick={() =>handleClick(answer)}>{answer.text}</div>
            
           ))}
            
        </div>
       
    </div>
  )
}

export default Trivia