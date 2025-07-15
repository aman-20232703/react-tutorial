import image1 from "./assets/images/image1.svg";
import Applrcounter from "./components/Applecounter";
import Counter from "./components/counter";
console.log(image1);

function App({root}) {
  return (
    <div>
      <h1 onClick={(e)=>
        console.log(e)
      }>hello</h1>
      <input type="text" onInput={(e)=>
        console.log(e.target.value)
}></input>
      <Applrcounter root={root}/>
    </div>
  );
}
export default App;
