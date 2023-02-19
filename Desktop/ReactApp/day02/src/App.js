
import "./App.css"
import ryan from "./assets/ryan.png";
import ch from "./assets/춘식.jpeg"
import con from "./assets/콘.jpeg"
import Profiles from "./profiles"



function App() {
  return (
    <div className="App">
        <Profiles img={ryan} name='라이언' 
          summary='덩치는 크지만 마음은 여린 수사자'
          isNew={true}></Profiles>
        <Profiles img={ch} name='춘식' summary='안냥. 난 라이언과 동거중인 춘식이다냥!'></Profiles>
        <Profiles img={con} name='콘' summary='안녕 반갑다콘! '></Profiles>
        
        
    </div>
  );
}

export default App;
