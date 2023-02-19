import React from 'react'

export default function profiles({img, name, summary, isNew}) {
  return (
    <div>
      <div className="profile">
          <img src={img} className="photo"></img>
          <h2>{name}</h2>
          <p>{summary}</p>
          {isNew && <span className="new">new</span>}
        </div>
    </div>
  )
}
