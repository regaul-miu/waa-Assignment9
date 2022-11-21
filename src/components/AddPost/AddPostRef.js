import axios from 'axios';
import React, { useRef } from 'react';
import './AddPost.css';

const AddPostRef = () => {
    const newPostRef = useRef();

    const addPostHandler = () => {
        const form = newPostRef.current;
        const data = {
            title: form['title'].value,
            author: form['author'].value,
            content: form['content'].value
        };
        console.log(data);

        axios.post('http://localhost:8080/api/v1/posts/', data)
            .then(data => {
                console.log('Success', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <div className='add-post'>
            <h1>Add a new post (Lab 09)</h1>
            <form ref={newPostRef}>
                <label>Title</label>
                <input type="text"
                    label={'title'}
                    name={'title'}
                />

                <label>Author</label>
                <input type="text"
                    label={'author'}
                    name={'author'}
                />

                <label>Content</label>
                <input type="text"
                    label={'content'}
                    name={'content'}
                />
            </form>
            

            <button onClick={addPostHandler}>Add Post</button>
        </div>
    );
};

export default AddPostRef;