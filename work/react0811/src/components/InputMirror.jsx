import {useState} from "react"

export default function InputMirror (){
    const [text, setText] = useState("")
    return (
        <>
        <h3>Number값의 상태 변환 체크</h3>
        <input type="text" value={text} placeholder="글자를 입력하세요." onChange={(e)=>setText(e.target.value)}/>
        <p>입력한 값은 : {text}</p>
        </>
    )
}