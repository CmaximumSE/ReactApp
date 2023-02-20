import React, { useRef } from 'react'
import { useState } from 'react'

export default function ReviewForm() {
  const titleInputref = useRef(); 
  const contentInputref = useRef(); 

  const [state, setState] = useState({
    title : '',
    content : '',
    emotion : 1,
  })

  const {title, content, emotion} = state;

  const handleChangeState = (e) => {
    const {name, value} = e.target;
    setState({...state, [name]:value});
  }

  const handleSubmit = (e) => {
    if(title.length < 3) {
      alert('제목은 3글자 이상 입력하세요.');
      titleInputref.current.focus();
      return 
    }

    if(content.length < 5) {
      alert('리뷰글은 5글자 이상 입력하세요.');
      contentInputref.current.focus();
      return 
    }

    console.log(state);
    alert('저장 성공')
  }

  return (
    <div>
      <h1>리뷰쓰기</h1>
      <div>
        <input ref={titleInputref} type = 'text' name = 'title' value = {title} onChange = {handleChangeState}></input>
      </div>
      <div>
        <textarea ref={contentInputref} name = 'content' value = {content} onChange = {handleChangeState}></textarea>
      </div>
      <span>리뷰점수 : </span>
      <select name = 'emotion' value = {emotion} >
        <option value={(1)}>1</option>
        <option value={(2)}>2</option>
        <option value={(3)}>3</option>
        <option value={(4)}>4</option>
        <option value={(5)}>5</option>

      </select>
      <div>
        <button onClick={handleSubmit}>리뷰저장</button>
      </div>
    </div>
  )
}
