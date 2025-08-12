import {useState} from "react";

export default function InputMirror(){
    const [changeTxt, setChangeTxt] = useState("")
    return (
        <>
        <input type="text" onChange={(e)=>setChangeTxt(e.target.value)} placeholder="입력하세요." />
        <h3>{changeTxt}</h3>
        </>
    )
}