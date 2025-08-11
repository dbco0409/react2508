import {useState} from "react";


export default function Counter(){
    // 훅 useState 참고

    const [count , setCount] = useState(1); 
    return (
        <>
            <div>
                <h2>카운터 : {count}</h2>
                <button type="button" onClick={()=>setCount(count + 1)} style={{background:"lightblue"}}>1씩 ++</button>
                <button type="button"onClick={()=>setCount(count - 1)} style={{background:"pink"}}> 1씩 --</button>
            </div>
        </>
    )
}