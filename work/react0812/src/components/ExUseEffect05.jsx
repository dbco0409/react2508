import { useEffect, useState } from "react";

const ExUseEffect05 = () => {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(()=>{
        const handle = () => setWidth(window.innerWidth)

        window.addEventListener("resize", handle)
        console.log("윈도우 리사이즈 리스너 등록");

        return()=>{
            window.removeEventListener("resize", handle)
            console.log("윈도우 리사이즈 리스너 해제")
        }
    },[])
    return (
        <div>
            <h1>현재 창의 너비 : {width}</h1>
        </div>
    );
};

export default ExUseEffect05;