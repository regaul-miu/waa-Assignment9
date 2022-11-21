import React from "react";
import './Post.css'

const Post = (props) =>{
  const{id, title, author} = props.data;
  return(
    <div className="post" onClick={props.setSelected}>
      <p>id: {id}</p>
      <p>Title: {title}</p>
      <p>Author: {author}</p>
    </div>
  );
};
export default Post;