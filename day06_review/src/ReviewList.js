import React from 'react'
import ReviewItem from './ReviewItem'

export default function ReviewList({reivewList}) {

  return (
   
    <div>
      <h2 className='ReviewList'>리뷰 리스트</h2>
      <p>{reivewList.length}개의 리뷰가 있습니다.</p>
      <div>
        {reivewList.map( (list) => (
            <ReviewItem {...list} key={list.id}></ReviewItem>
        ))}
        
      </div>
    </div>
  )
}
