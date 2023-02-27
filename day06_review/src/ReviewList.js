import React from "react";
import ReviewItem from "./ReviewItem";

export default function ReviewList({ reviewList ,onRemove,onEdit}) {
  return (
    <div className="ReviewList">
      <h2>리뷰 리스트</h2>
      <p>{reviewList.length}개의 리뷰가 있습니다</p>
      <div>
        {reviewList.map((list) => (
          <ReviewItem {...list}  key={list.id} onRemove={onRemove}onEdit={onEdit}/>
        ))}
      </div>
    </div>
  );
}