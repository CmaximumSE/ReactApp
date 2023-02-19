import RedBox, { BlueBox, GreenBox } from "./RedBox";

function App() {
 
  const name='나나1' 
  const list=['우유', '딸기', '바나나', '요거트'];

  // const cars = ["BMW", "Volvo", "Mini"];

  // let text = "";
  // for (let item of list) {
  //   text += item + " ";
  // }

  return (
    <div className="App"> 
      <h1>{`Hello~${name}`}</h1>
      <ul>
        {list.map( (item) => <li>{item}</li>)}
      </ul>
      
      
      <RedBox/>
      <BlueBox/>
      <GreenBox/>
    </div>
  );
}

export default App;