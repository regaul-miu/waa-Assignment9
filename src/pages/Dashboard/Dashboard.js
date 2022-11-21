import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AddPost from '../../components/AddPost/AddPost';
import AddPostRef from '../../components/AddPost/AddPostRef';
import PostDetail from '../../components/PostDetail/PostDetail';
import { SelectedIdContext } from '../../context/SelectedIdContext';
import Posts from '../Posts/Posts';
import './Dashboard.css';

const Dashboard = () => {

    const [posts, setPosts] = useState([]);

    const [newPost, setNewPost] = useState(
        {
            title: "",
            author: "",
            content: ""
        }
    );

    const [selectedState, setSelectedState] = useState(0);

    const titleBtnHandler = () => {
        if (!posts.length) {
            return;
        }
        const post = posts[0];
        post.title = document.getElementById('title').value;
        const copyPosts = [...posts];
        setPosts(copyPosts);
    };

    const setSelected = (id) => {
        setSelectedState(id);
    }

    const fetchPosts = () => {
        axios.get('http://localhost:8080/posts/')
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => {
                console.log(error.message)
            });
    };

    const deletePostHandler = (id) => {
        axios.delete('http://localhost:8080/posts/' + id)
            .then(response => {
                fetchPosts();
            })
            .catch(err => {
                console.error(err);
            })
    }

    const onChange = (events) => {
        const copy = { ...newPost };
        copy[events.target.name] = events.target.value;
        setNewPost(copy);
    }

    const addPostHandler = () => {
        axios.post('http://localhost:8080/posts/', newPost)
            .then(response => {
                fetchPosts();
            })
            .catch(err => {
                console.error(err);
            });
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <SelectedIdContext.Provider value={selectedState}>
            <div className='dashboard'>
                <Posts 
                    posts = {posts} 
                    setSelected = {setSelected} />

                <div className='title-change'>
                    <input id='title' /> <br />
                    <button id='title-btn' onClick={titleBtnHandler}>change name</button>
                </div>

                <PostDetail 
                    id={selectedState} 
                    deletePost = {deletePostHandler} />
                
                
                <AddPost 
                    post={newPost}
                    onChange={(event) => { onChange(event) }}
                    addPost={addPostHandler} />
                    
                <AddPostRef/>

            </div>
        </SelectedIdContext.Provider>
    );
};

export default Dashboard;