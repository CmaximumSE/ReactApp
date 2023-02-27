import React, { useState, useRef } from "react";

function ReviewForm({ onCreate }) {
  const titleInputref = useRef();
  const contentInputref = useRef();

  const [state, setState] = useState({
    title: "",
    content: "",
    emotion: 1,
  });

  const { title, content, emotion } = state;

  const handleChangeState = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  
  const handleSubmit = () => {
    alert();
    if (title.length < 1) {
      alert("제목은 3글자 이상 입력하세요.");
      titleInputref.current.focus();
      return;
    }
    if (content.length < 5) {
      alert("리뷰글은 5글자 이상 입력하세요.");
      contentInputref.current.focus();
      return;
    }

    onCreate(title, content, emotion);

    setState({
      title: "",
      content: "",
      emotion: 1,
    });
    alert("저장 성공~");
  };

  return (
    <div className="ReviewForm">
      <h1>리뷰쓰기</h1>
      <div>
        <input
          ref={titleInputref}
          type="text"
          name="title"
          value={title}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <textarea
          name="content"
          ref={contentInputref}
          value={content}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <span>리뷰점수 :</span>
        <select name="emotion" value={emotion} onChange={handleChangeState}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <div>
          <button onClick={handleSubmit}>리뷰저장</button>
        </div>
      </div>
    </div>
  );
}

export default React.memo(ReviewForm);
