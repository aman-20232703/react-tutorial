import image1 from "./assets/images/image1.svg";
import Applrcounter from "./components/Applecounter";
console.log(image1);

function App() {
  return (
    <div>
      <h1 onClick={(e)=>
        console.log(e)
      }>hello</h1>
      <input type="text" onInput={(e)=>
        console.log(e.target.value)
      }></input>
      <Applrcounter />
    </div>
  );
}
export default App;
