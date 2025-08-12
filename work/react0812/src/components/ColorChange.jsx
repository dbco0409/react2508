import { useState } from "react"
export default function ColorChange(){
    const [color, setColor] = useState("")

    return (
        <>
            <h2 style={{color}}>색상변경</h2>
            <button type="button" onClick={()=>setColor("red")}>Red</button>
            <button type="button" onClick={()=>setColor("blue")}>Blue</button>
            <button type="button" onClick={()=>setColor("Green")}>Green</button>
            <button type="button" onClick={()=>setColor("Pink")}>PINK</button>
            <button type="button" onClick={()=>setColor("")}>Default</button>
        </>
    )
}