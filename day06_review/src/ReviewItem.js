import React, {useState,useRef} from "react";

function ReviewItem({
  title,
  content,
  emotion,
  create_date,
  onRemove,
  onEdit,
  id,
}) {
  const [isEdit, setIsEdit] = useState(false);
  const [localContent, setLocalContent] = useState(content);
  const localContentRef=useRef()

  const handleRemove = () => {
    if (window.confirm(`${id}번째 글을 삭제하시겠습니까?`)) {
      onRemove(id);
    }
  };

  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };
  
  const handleQuitEdit = () => {
    setIsEdit(false);
  };
  
  const handleEdit = () => {
    if (localContent.length < 5) {
      alert("리뷰글은 5글자 이상 입력하세요.");
      localContentRef.current.focus();
      return;
    }
    if (window.confirm(`${id}번째 글을 수정하시겠습니까?`)) {
      onEdit(id,localContent);
      toggleEdit()
    }

  };
 
  return (
    <div className="ReviewItem">
      <div className="info">
        <span>영화제목 : {title}</span> | <span>평점 : {emotion}</span>
      </div>
      <p>작성시간 :{new Date(create_date).toLocaleDateString()}</p>

      <p>리뷰 글 :{
        isEdit?(
          <textarea onChange = {e => setLocalContent(e.target.value)}
          value ={ localContent}
          ref = {localContentRef}
          >
          </textarea>

        ):(content)
               
        }</p>

      {isEdit ? (
         <>
         <button onClick = {handleQuitEdit}>
           수정취소
         </button>
         <button onClick = {handleEdit}>
           수정완료
         </button>
       </>
      ) : (
        <>
          <button className = "remove" onClick = {handleRemove}>삭제</button>
          <button onClick = {toggleEdit}>수정</button>
        </>
      )}
    </div>
  );
}

export default React.memo(ReviewItem)