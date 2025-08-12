import { useEffect, useState } from 'react';

const ExUseEffect02 = () => {
    const [count, setCount] = useState(0); 
    useEffect(()=>{
        console.log(`테스트 ${count}`);
    },[count])
    return (
        <div>
            <p>{count}</p>
            <button onClick={()=>{setCount(count+1)}}>카운트 증가</button>
            <button onClick={()=>{setCount(count-1)}}>카운트 감소</button>
        </div>
    );
};

export default ExUseEffect02;