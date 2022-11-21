import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Comment from '../Comment/Comment';
import './PostDetail.css';

const PostDetail = ({id, deletePost}) => {
    const [detail, setDetail] = useState({});
    const [comments, setComments] = useState([]);

    useEffect(() => {
        if (id === 0) {
            return;
        }
        axios.get(`http://localhost:8080/posts/${id}/`)
            .then(response => {
                setDetail(response.data);
            })
            .catch(error => {
                console.log(error.message)
            });
    }, [id]);

    useEffect(() => {
        if (id === 0) {
            return;
        }
        axios.get(`http://localhost:8080/posts/${id}/comments`)
            .then(response => {
                setComments(response.data);
            })
            .catch(error => {
                console.log(error.message)
            });
    }, [id]);

    const editBtnHandler = (e) => {
        e.preventDefault();
        console.log('Edit clicked for id : ' + id);
    };
    const deleteBtnHandler = (e) => {
        e.preventDefault();
        deletePost(id);
    }

    if (id === 0) {
        return (
            <div className='post-detail'>
                <p>Select a post to see details</p>
            </div>
        );
    }
    return (
        <div className='post-detail'>
            <h4>{detail.title}</h4>
            <h5>{detail.author}</h5>
            <p>{detail.content}</p>
            <div>
                <h5>Comments</h5>
                {comments.length !== 0 ? comments.map(c => {
                    return <Comment key={c.id} name={c.name} />
                }): ""}
            </div>
            <div className='detail-action'>
                <a href='/' onClick={editBtnHandler}>Edit</a>
                <a href='/' onClick={deleteBtnHandler}>Delete</a>
            </div>
        </div>
    );
};

export default PostDetail;