import React, { useEffect, useState } from 'react';
import axios from "axios";

type ReduxPostProps = {
  className?: string
}
function ReduxPost(props:ReduxPostProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios.get('https://jsonplaceholder.typicode.com/posts').then((res: any) => {
      if(res && res.data){
        setData(res.data);
        setIsLoading(false);
      }
    }).catch(() => {
      setIsLoading(false);
      setError(true);
    })
  },[]);
  if(isLoading){
    return <div>Loading...</div>
  }
  if(error){
    return <div>Error get data redux post</div>
  }
  return (
    <div>
      <p>redux post</p>
      {data && data.length && data.map((post: any) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}

export default ReduxPost;
