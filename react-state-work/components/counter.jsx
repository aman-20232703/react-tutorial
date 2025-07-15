import { useState } from "react"
export default function counter({classcountername}) {
    const [count,setCount]=useState(0)
    const [name,setname]=useState(classcountername)
    console.log("rendering")
    console.log(count, name)
  return (
    <div style={{textAlign:'center'}}>
        <h1>{count}</h1>
        <h2>{name}</h2>
        <button onClick={()=> {   // by using CallBackFunction we pass siamultenously value at a time and this is happened when wour update of states depend upon previous value
            setCount((CallBackFunction)=> CallBackFunction+1)
            setCount((CallBackFunction)=> CallBackFunction+1)
            setCount((CallBackFunction)=> CallBackFunction+1) // it depends on previous one
            setname(name+' n')
        }}>increase count</button>
    </div>
  )
}
