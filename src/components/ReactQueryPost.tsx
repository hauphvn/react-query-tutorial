import React from 'react';
import axios from "axios";
import { useQuery } from "react-query";
import { REACT_QUERY } from "../constant/constant";

type ReactQueryPostProps = {
  className?: string
}
const getPosts = () => {
  return axios.get('https://jsonplaceholder.typicode.com/posts');
}
function ReactQueryPost(props:ReactQueryPostProps) {
 const {isLoading, data: posts, isError} = useQuery(REACT_QUERY.KEY_POSTS_DATA,getPosts);
 if(isLoading){
   return (<div>Loading...</div>);
 }
 if(isError){
   return (<div>Error get data</div>)
 }
  return (
    <div>
      {posts && posts?.data.map((post: any) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}

export default ReactQueryPost;
