import React from 'react'

export default function ReviewItem({ title, content, emotion, create_date}) {
  return (
    <div className='ReviewItem'>
        <p>영화 제목 : {title}</p>
        <p>리뷰: {content}</p>
        <p>평점 : {emotion}</p>
        <p>작성 시간 : {new Date(create_date).toLocaleString()}</p> ~
    </div>
  )
}
