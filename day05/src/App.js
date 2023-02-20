import {useState} from 'react';
import AddWordForm from "./AddWordForm.js";
import WordList from './WordList.js';
import "./App.css"

 function App() {
 const [words, setWords] = useState([]);

 const handleAddWord = (newWord) => {
  setWords([...words,newWord])
 }

 const handleDeleteWord = (id) => {
  setWords(words.filter(word=>word.id !== id))
 }

 console.log(words);
  return (
    <div className="app-container">
      <h1>나의 단어장</h1>
    <AddWordForm onAddWord={handleAddWord}/>
    <WordList words={words} onDeleteWord = {handleDeleteWord}/>
    </div>
  );
}

export default App;