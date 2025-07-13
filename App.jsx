import image1 from "./assets/images/image1.svg";
import Applrcounter from "./components/Applecounter";
import Counter from "./components/counter";
console.log(image1);

function App() {
  return (

    <div>
      <Counter classcountername='timer'>
        <Applrcounter/>
      </Counter>
    </div>
  );
}
export default App;
