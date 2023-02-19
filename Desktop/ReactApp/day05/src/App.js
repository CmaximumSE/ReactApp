import {useState} from 'react';
import AddWordForm from "./AddWordForm";
import './App.css'

 function App() {
 const [words, setWords] = useState([]);

 const handleAddWord = (newWord) => {
  setWords([...words,newWord])
 }
 console.log(words);
  return (
    <div className="App">
    <AddWordForm onAddWord={handleAddWord}/>
    </div>
  );
}

export default App;