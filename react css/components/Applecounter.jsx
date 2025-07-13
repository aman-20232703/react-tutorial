import Button from "./Button";

import image1 from "../assets/images/image1.svg";
import image2 from "../assets/images/image2.svg";
import ApplrBasket from "./ApplrBasket";

import "./Applecounter.css";
import { useState} from "react";

// let leftapplecount = 0;
// let rightapplecount = totalapplecount - leftapplecount;

const Applecounter = () => {
  const totalapplecount = 10;
  const [rightapplecount, setleftapplecount] = useState(0)
  const [leftapplecount, setrightapplecount] = useState(totalapplecount-rightapplecount)

  const rightClickHandler = () => {   // onclick = {() =>{console('click me') }}
    // console.log("right");
    if (rightapplecount > 0) {
      setrightapplecount(rightapplecount-1)
      setleftapplecount(leftapplecount+1)
    }
  };
  const leftClickHandler = () => {
    // console.log("left");
    if (leftapplecount > 0) {
      setrightapplecount(rightapplecount+1)
      setleftapplecount(leftapplecount-1)
    
    }
  };

  return (
      <section className="text">
        <ApplrBasket applecount={leftapplecount} basketname="basket 1" />
        <Button
          clickHandler={leftClickHandler}
          imageUrl={image1}
        />
        <Button
          clickHandler={rightClickHandler}
          imageUrl={image2}
        />
        <ApplrBasket applecount={rightapplecount} basketname="basket 2" />
      </section>
  );
};

export default Applecounter;


// sigle css in - class text