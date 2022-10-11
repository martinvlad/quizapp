
import './App.css'
import {useEffect, useState, useMemo} from 'react';
import Trivia from './components/Trivia';
import Timer from './components/Timer';
import Start from './components/Start';
function App() {
  const [username, setUsername] = useState(null);
  const [questionNumber,setquestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState('$0 ')
  const data = [{
   id: 1,
   question: 'How tall is the president of the United States?',
   answers: [
    {
      text: `5'8`,
      correct: false
    },
    {
      text: `5'10`,
      correct: false
    },
    {
      text: `6'1`,
      correct: false
    },
    {
      text: `6'4`,
      correct: true
    },
   ],
  },
  {
    id: 2,
    question: 'How tall is the my mother?',
    answers: [
     {
       text: `5'8`,
       correct: false
     },
     {
       text: `5'10`,
       correct: true
     },
     {
       text: `6'1`,
       correct: false
     },
     {
       text: `6'4`,
       correct: false
     },
    ],
   },
   {
    id: 3,
    question: 'How tall is my father?',
    answers: [
     {
       text: `5'8`,
       correct: false
     },
     {
       text: `5'10`,
       correct: false
     },
     {
       text: `6'1`,
       correct: true
     },
     {
       text: `6'4`,
       correct: false
     },
    ],
   },
   {
    id: 4,
    question: 'How tall is my father?',
    answers: [
     {
       text: `5'8`,
       correct: false
     },
     {
       text: `5'10`,
       correct: false
     },
     {
       text: `6'1`,
       correct: true
     },
     {
       text: `6'4`,
       correct: false
     },
    ],
   },
   {
    id: 5,
    question: 'How tall is my father?',
    answers: [
     {
       text: `5'8`,
       correct: false
     },
     {
       text: `5'10`,
       correct: false
     },
     {
       text: `6'1`,
       correct: true
     },
     {
       text: `6'4`,
       correct: false
     },
    ],
   },
   {
    id: 6,
    question: 'How tall is my father?',
    answers: [
     {
       text: `5'8`,
       correct: false
     },
     {
       text: `5'10`,
       correct: false
     },
     {
       text: `6'1`,
       correct: true
     },
     {
       text: `6'4`,
       correct: false
     },
    ],
   },
   {
    id: 7,
    question: 'How tall is my father?',
    answers: [
     {
       text: `5'8`,
       correct: false
     },
     {
       text: `5'10`,
       correct: false
     },
     {
       text: `6'1`,
       correct: true
     },
     {
       text: `6'4`,
       correct: false
     },
    ],
   },
   {
    id: 8,
    question: 'How tall is my father?',
    answers: [
     {
       text: `5'8`,
       correct: false
     },
     {
       text: `5'10`,
       correct: false
     },
     {
       text: `6'1`,
       correct: true
     },
     {
       text: `6'4`,
       correct: false
     },
    ],
   },
   {
    id: 9,
    question: 'How tall is my father?',
    answers: [
     {
       text: `5'8`,
       correct: false
     },
     {
       text: `5'10`,
       correct: false
     },
     {
       text: `6'1`,
       correct: true
     },
     {
       text: `6'4`,
       correct: false
     },
    ],
   },
   {
    id: 10,
    question: 'How tall is my father?',
    answers: [
     {
       text: `5'8`,
       correct: false
     },
     {
       text: `5'10`,
       correct: false
     },
     {
       text: `6'1`,
       correct: true
     },
     {
       text: `6'4`,
       correct: false
     },
    ],
   },
   {
    id: 11,
    question: 'How tall is my father?',
    answers: [
     {
       text: `5'8`,
       correct: false
     },
     {
       text: `5'10`,
       correct: false
     },
     {
       text: `6'1`,
       correct: true
     },
     {
       text: `6'4`,
       correct: false
     },
    ],
   },
   {
    id: 12,
    question: 'How tall is my father?',
    answers: [
     {
       text: `5'8`,
       correct: false
     },
     {
       text: `5'10`,
       correct: false
     },
     {
       text: `6'1`,
       correct: true
     },
     {
       text: `6'4`,
       correct: false
     },
    ],
   },
   {
    id: 13,
    question: 'How tall is my father?',
    answers: [
     {
       text: `5'8`,
       correct: false
     },
     {
       text: `5'10`,
       correct: false
     },
     {
       text: `6'1`,
       correct: true
     },
     {
       text: `6'4`,
       correct: false
     },
    ],
   },
   {
    id: 14,
    question: 'How tall is my father?',
    answers: [
     {
       text: `5'8`,
       correct: false
     },
     {
       text: `5'10`,
       correct: false
     },
     {
       text: `6'1`,
       correct: true
     },
     {
       text: `6'4`,
       correct: false
     },
    ],
   },
   {
    id: 15,
    question: 'How tall is my father?',
    answers: [
     {
       text: `5'8`,
       correct: false
     },
     {
       text: `5'10`,
       correct: false
     },
     {
       text: `6'1`,
       correct: true
     },
     {
       text: `6'4`,
       correct: false
     },
    ],
   }
]
const pyramidValues = useMemo(() =>
    [
      { id: 1, amount: "$ 100" },
      { id: 2, amount: "$ 200" },
      { id: 3, amount: "$ 300" },
      { id: 4, amount: "$ 500" },
      { id: 5, amount: "$ 1.000" },
      { id: 6, amount: "$ 2.000" },
      { id: 7, amount: "$ 4.000" },
      { id: 8, amount: "$ 8.000" },
      { id: 9, amount: "$ 16.000" },
      { id: 10, amount: "$ 32.000" },
      { id: 11, amount: "$ 64.000" },
      { id: 12, amount: "$ 125.000" },
      { id: 13, amount: "$ 250.000" },
      { id: 14, amount: "$ 500.000" },
      { id: 15, amount: "$ 1.000.000" },
    ].reverse(),[]);

  useEffect(() =>{
    if(questionNumber > 15){
      setEarned(`You won $1,000,000!!! Congrats ${username}!`)
      setStop(true);
      
    }
    else{
      questionNumber > 1 && setEarned(pyramidValues.find(m => m.id === questionNumber -1).amount);
    }
   

  },[pyramidValues,questionNumber])
  return (<div className="app">
    {username ? (<> <div className="main">
      {stop ? <h1 className='earned'>{questionNumber > 15 ? <h3 className='rainbow'>{earned}</h3> : 
      <div>
      <h3 className="rainbow">You earned {earned}, valiant effort {username}!</h3>
      </div>
      }</h1> : (
      <>
      <div className="top">
        <div className="timer"><Timer setStop={setStop} questionNumber={questionNumber}/></div>
      </div>
      <div className="bottom"><Trivia data={data} setStop={setStop} setquestionNumber={setquestionNumber} questionNumber={questionNumber}/></div>
      </>
      )}
      
    </div>
    <div className="pyramid">
      <ul className="items">
       {pyramidValues.map(item =>(
        <li className={questionNumber == item.id ? 'item active' : 'item'}>
              <span className='itemNumber'>{item.id}</span>
              <span className='itemAmount'>{item.amount}</span>
        </li>
          
       ))}
      </ul>
    </div>
    </>) : (<Start setUsername={setUsername}/>)}
   
  </div>);
}

export default App;
