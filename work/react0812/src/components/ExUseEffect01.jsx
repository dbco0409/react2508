import React, { useEffect } from 'react';

const ExUseEffect01 = () => {
    useEffect(
    ()=>{
        console.log('컴포넌트가 마운트 되었습니다.');
    },[])
    return (
        <>
            <h1>Hello UseEffect!</h1>
        </>
    );
};

export default ExUseEffect01;