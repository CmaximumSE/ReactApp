import  {useState} from "react";
import Products  from "./Products";

 function App() {
 const [showProducts, setShowProducts] = useState(true);
  return (
    <div className="App">
      <h1>UseEffect</h1>
      {showProducts&& <Products/>}
      <button onClick={() => setShowProducts(!showProducts)}>Toggle</button>
    </div>
  );
}

export default App;