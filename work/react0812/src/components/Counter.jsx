import {useState} from "react"

export default function Counter(){
    const [count, setCount] = useState(0);
    return (
        <>
        <h2>Counter {count}</h2>
        <button type="button" onClick={()=>setCount(count + 1)}>증가버튼</button>
        <button type="button" onClick={()=>setCount(count - 1)}>감소버튼</button>
        </>
    )
}