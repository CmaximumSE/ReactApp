import {useState,useRef} from "react";

export default function AddWordForm({onAddWord}) {
  const [inputWord, setInputWord] = useState({
    subject: "",
    command: "",
    definition: "",
  });
  const {subject,command,definition}=inputWord
  const inputRef=useRef(null)
  // -----------------------------
  const handleSubmit = (e) => {
    e.preventDefault();
    const newWord={
        id:Date.now(),
        ...inputWord
    }
    onAddWord(newWord)
   setInputWord({
    subject: "",
    command: "",
    definition: "",
   })
    inputRef.current.focus()
  };
  // -----------------------------
  const handleChange = (e) => {
    const {name,value}=e.target
    setInputWord(()=>({
        ...inputWord,
        [name]:value
    }))
  }
   // -----------------------------
  return (
    <form onSubmit={handleSubmit}>
      <table>
        <thead>
          <tr>
            <td>과목</td>
            <td>명령어</td>
            <td>정의</td>
            <td rowSpan="2">
              <button type="submit">Add</button>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="text" 
              ref={inputRef}
              name="subject" 
              value={subject}
              onChange={handleChange}
               />
            </td>
            <td>
              <input type="text" 
              name="command" 
              value={command}
              onChange={handleChange}
               />
            </td>
            <td>
              <input type="text" 
              name="definition" 
              value={definition} 
              onChange={handleChange}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}