import React, {useState, useEffect} from 'react';

const ExUseEffect04 = () => {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
        .then((res)=>res.json())
        .then((data)=>setPosts(data))
    },[])
    return (
        <div>
            <h3>게시글 목록</h3>
            <hr />
            <ul style={{textAlign:"left"}}>
                {
                    posts.map((item,index)=>(
                        <li key={index}>
                            <a href="#">{item.title}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default ExUseEffect04;