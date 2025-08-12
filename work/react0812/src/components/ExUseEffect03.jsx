import {useState, useEffect} from 'react';

const ExUseEffect03 = () => {
    const [second, setSeconds] = useState(0);
    useEffect(()=>{
        const timer = setInterval(()=>{
            //setSecounds((prev)=> prev + 1);
            setSeconds(second + 1);
        },1000);
        return ()=>{
            clearInterval(timer);
            console.log("타이머 종료");
        }
    },[second])
    return (
        <div>
            <h1>{second}초 경과</h1>
        </div>
    );
};

export default ExUseEffect03;