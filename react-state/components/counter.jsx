import { useState } from "react"

export default function counter() {
    const [count,setCount]=useState(0)

    console.log("rendering")
    console.log(count)
    // const myStateArray= useState(0)
    // const count = myStateArray[0]
    // const setCount = myStateArray[1]
  return (
    <div style={{textAlign:'center'}}>
        <h1>{count}</h1>
        <button onClick={()=> {
            setCount(count+1)
        }}>increase count</button>
    </div>
  )
}
