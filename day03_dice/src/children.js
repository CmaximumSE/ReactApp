import React from 'react'

function Menu ({children, url}) {
    return ( <li><a href={url}>{children}</a></li> )
}

export default function children() {
  return (
    <div>
      {/* <Button>Click Mel</Button>
      <Button>Submit</Button>
      <Button>Cancle</Button> */}
        <Menu url='https://www.google.com/'>구글 바로가기</Menu>
        <Menu url='https://www.naver.com/'>네이버 바로가기</Menu>
    </div>
  )
}
