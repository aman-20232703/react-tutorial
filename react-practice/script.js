/* const h2= React.createElement('h2',{className:'subheading', id:'root'}, 'hello react')
//           function createElementWithValidation(type, props, children)

// const h2 = {
//   type: "h2",
//   key: null,
//   ref: null,
//   props: {
//     className: "subheading",
//     id: "root",
//     children: "hello react",
//   },
//   _owner: null,
//   _store: {},
// };

const root = ReactDOM.createRoot(document.querySelector("#root")); //by using react dom we render this directly on page
root.render(h2);
*/

// const container = React.createElement(
//   "div",
//   { className: "container", id: "container" },
//   [
//     React.createElement("section", { key: 1 }, [
//       React.createElement(
//         "p",
//         { key: 2 },
//         "the library for web and native user interface"
//       )
//     ])
//   ]
// );

// const container = React.createElement(
//   "div",
//   { className: "container", id: "container" },
//   React.createElement("section",{ key: 1 },
//     React.createElement(
//       "p",{ key: 1 },"the library for web and native user interface"),

//     React.createElement("img", {
//       key: 2,
//       src: "march.jpg",
//       style: {
//         height: 100,
//         width: 100,
//         backgroundColor: "pink",
//         borderRadius: 7,
//         padding: 10,
//       },
//     })
//   ),
//   React.createElement("section",{ key: 2 },
//     React.createElement("form", { key: 1 },
//       React.createElement('div',{className:'input-group 1', key:1},
//         React.createElement('label',{key:1, htmlFor:'username'}, 'username'),
//         React.createElement('input',{key:2, id:'username 1'},)
//       ),
//       React.createElement('div',{className:'input-group 2', key:2},
//         React.createElement('label',{key:1, htmlFor:'password' }, 'password'),
//         React.createElement('input',{key:2, id:'username 2',type:'password'})
//       )
//     )
//   )
// );

const container = (
  <div className="container" id="container">
    <section>
      <p>the library for web and native user interface</p>
      <img
        src="march.jpg"
        style={{
          height: 100,
          width: 100,
          backgroundColor: "pink",
          borderRadius: 7,
          padding: 10,
        }}
      />
    </section>

    <section>
      <form>
        <div className="input-group 1">
          <label htmlFor="username">username</label>
          <input id="username 1"></input>
        </div>
        <div className="input-group 2">
          <label htmlFor="password">password</label>
          <input id="username 2" type="password"></input>
        </div>
      </form>
    </section>
  </div>
);

// const user='aman'
// const h2= <h2>hello {user}</h2>

const root = ReactDOM.createRoot(document.querySelector("#root")); //by using react dom we render this directly on page
root.render(container);

// using documentm
// const h2= document.createElement('h2')
// h2.innerText="hello document"
// document.querySelector('#root').append(h2)
