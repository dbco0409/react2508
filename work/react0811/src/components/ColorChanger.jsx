import {useState} from "react";


export default function ColorChanger(){
   const [color, setColor]=useState("yellow");
    return (
        <>
           <h1>스타일값의 상태변화</h1> 
           <h2 style={{color}}>색상변화</h2>
           <button onClick={()=>{setColor('red')}}>빨강</button>
           <button onClick={()=>{setColor('blue')}}>파랑</button>
           <button onClick={()=>{setColor('yellow')}}>노랑</button>
           <button onClick={()=>{setColor('green')}}>초록</button>
        </>
    )
}