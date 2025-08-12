import React, {useEffect} from 'react';

const ExUseEffect04 = () => {
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=5").then().then()
    },[])
    return (
        <div>
            <h3>게시글 목록</h3>
            <hr />
            <ul>
                <li></li>
            </ul>
        </div>
    );
};

export default ExUseEffect04;