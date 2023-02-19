import Button from "./Button";
import { useState } from "react";
import Board from "./Board";
import './App.css'

const randomNumber = (params) => {
  return Math.ceil(Math.random()*6);
}


function App() {
// const [num, setNum] = useState(1);
// const [sum, setSum] = useState(0);
// const [num2, setNum2] = useState(1);
// const [sum2, setSum2] = useState(0);
const [gameHistory, setGameHistory] = useState([]);
const [gameHistory2, setGameHistory2] = useState([]);



const handleRollClick = () => {
  const nextNum = randomNumber();
  const nextNum2 = randomNumber();
  // setNum(nextNum);
  // setSum(sum + nextNum);
  // setNum2(nextNum2);
  // setSum2(sum2 + nextNum2);

  setGameHistory([...gameHistory, nextNum]);
  setGameHistory2([...gameHistory2, nextNum2]);
}

const handleClearClick = () => {
  // setNum(1);
  // setNum2(1);
  // setSum2(0);
  // setSum2(0);
  setGameHistory([]);
  setGameHistory2([]);
}

  return (
    <div className="APP">
    
      
    </div>
  )
}

export default App;