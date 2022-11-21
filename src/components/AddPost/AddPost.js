import React from 'react';
import './AddPost.css';

const AddPost = (props) => {
    const { title, author, content } = props.post;
    return (
        <div className='add-post'>
            <h1>Add a new post</h1>
            <label>Title</label>
            <input type="text"
                label={'title'}
                name={'title'}
                onChange={props.onChange}
                value={title}
            />

            <label>Author</label>
            <input type="text"
                label={'author'}
                name={'author'}
                onChange={props.onChange}
                value={author}
            />

            <label>Content</label>
            <input type="text"
                label={'content'}
                name={'content'}
                onChange={props.onChange}
                value={content}
            />

            <button onClick={props.addPost}>Add Post</button>
        </div>
    );
};

export default AddPost;