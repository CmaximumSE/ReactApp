import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";

function App() {
  const dummyList = [
      { 
      id: 1,
      title : '썬레드라인',
      content : '말이 필요 없는 영화',
      emotion : 5,
      create_date : new Date().getTime()
    },
    { 
      id : 2,
      title : '아바타 물의 길',
      content : 'good',
      emotion : 5,
      create_date : new Date().getTime()
    },
    { 
      id : 3,
      title : '유령',
      content : 'so good',
      emotion : 4,
      create_date : new Date().getTime()
    }
  ]
  return (
    <div className="App"> 
    <ReviewForm></ReviewForm>
    <ReviewList reivewList={dummyList}></ReviewList>
    </div>
  );
}

export default App;