import Button from "./Button";

import image1 from "../assets/images/image1.svg";
import image2 from "../assets/images/image2.svg";
import ApplrBasket from "./ApplrBasket";

import "./Applecounter.css";
import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector("#root"));

const totalapplecount = 10;
let leftapplecount = 0;
let rightapplecount = totalapplecount - leftapplecount;

const Applecounter = () => {
  const rightClickHandler = () => {   // onclick = {() =>{console('click me') }}
    // console.log("right");
    if (rightapplecount > 0) {
      rightapplecount++
      leftapplecount--
      root.render(<Applecounter />);
    }
  };
  const leftClickHandler = () => {
    // console.log("left");
    if (leftapplecount > 0) {
      rightapplecount--
      leftapplecount++
      root.render(<Applecounter />);
    }
  };

  return (
    <>
      <section>
        <ApplrBasket applecount={leftapplecount} basketname="basket 1" />
        <Button
          clickHandler={leftClickHandler}
          imageUrl={image1}
          buttonName="left arrow"
        />
        <Button
          clickHandler={rightClickHandler}
          imageUrl={image2}
          buttonName="right arrow"
        />
        <ApplrBasket applecount={rightapplecount} basketname="basket 2" />
      </section>
      <p>
        <button
          onClick={() => {
          }} 
        >
          re-render
        </button>
      </p>
    </>
  );
};

export default Applecounter;
