import {useState} from "react";

export default function ToggleBtn(){
    const [isOn, isOnSet] = useState(false);

    return (
        <>
        <h2>테스트</h2>
        <button type="button" onClick={()=>isOnSet(!isOn)}>{isOn ? "On" : "Off"} 버튼</button>
        </>
    )
}