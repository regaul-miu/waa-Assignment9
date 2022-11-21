import React from "react";
import Post from '../../components/Post/Post';
import './Posts.css';

const Posts = (props)=>{
  const posts = props.posts.map(p =>{
    return <Post
            key={p.id}
            data={p}
            setSelected = {() =>{props.setSelected(p.id)}}/>

    
  });
  return(
    <div className='posts'>
      {posts.length === 0 ? 'No posts' : posts}
    </div>
  );
};
export default Posts;