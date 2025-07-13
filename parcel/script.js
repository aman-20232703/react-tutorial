// import React from 'react'
// import {user} from './data.js'

// console.log(React);
// console.log('hello world');

//const h1 = <h1>hello world</h1>;
//console.log("hii");

import { createRoot } from "react-dom/client";
import "./style.css";

// function Card(key, title, image, brand, price) {
//     console.log(key);
//     return (
//         <div className="card" key={key}>
//             <img src={image} alt="phones" />
//             <div className="card-content">
//                 <h3>{title}</h3>
//                 <p>{brand}</p>
//                 <p>${price}</p>
//             </div>
//         </div>
//     );
// }

// const container = [Card(1), Card(2), Card(3), Card(4), Card(5), Card(6)];
const root = createRoot(document.getElementById("root"));
// root.render(h1);

// fetch('https://dummyjson.com/products/search?q=phone')
//     .then(res => res.json())
//     .then ((data)=>{            //callback function
//         console.log(data)        // to know about data
//         const container2 = data.products.map((products) => {
//             //console.log(products) //see product details
//             return Card(products.id, products.title, products.thumbnail,products.brand,products.price)
//         })

//         console.log(container2)
//         root.render(<div className="container">{container2}</div>);
//     })

// fetch("https://dummyjson.com/products/search?q=phone")
// .then((res) => res.json())
// .then((data) => {
//     root.render(
//         <div className="container">
//             {data.products.map((products) => {
//                 return Card(
//                     products.id,
//                     products.title,
//                     products.thumbnail,
//                     products.brand,
//                     products.price
//                 );
//             })}
//         </div>
//     );
// });



function Card(props) {
  const {title, image, brand, price } = props;
  return (
    <div className="card">
      <img src={image} alt="phones" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{brand}</p>
        <p>${price}</p>
      </div>
    </div>
  );
}

fetch("https://dummyjson.com/products/search?q=phone")
  .then((res) => res.json())
  .then((data) => {
    root.render(
      <div className="container">
        {data.products.map((products) => {
          return (
            <Card
            title={products.title}
            price={products.price}
            image={products.thumbnail}
            brand={products.brand}
            key={products.id}
            />
          );
        })}
      </div>
    );
  });


//this is for console not file code, only for check
    //   console.log(
    //   data.products.map((products) => {
    //     return (
    //       <Card
    //         title={products.title}
    //         price={products.price}
    //         image={products.thumbnail}
    //         brand={products.brand}
    //         key={products.id}
    //       />
    //     );
    //   })