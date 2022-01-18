import React, {useState} from 'react';
import MyInput from "./MyInput";
import {useDispatch} from "react-redux";
import {createTodo} from "../store/actions/todo";

const CreatePost = () => {
    const dispatch = useDispatch();
    const [post, setPost] = useState({title: '', description:''});

    const createPost = () => {
        const newPost = {
            ...post, id: new Date()
        }

        dispatch(createTodo(newPost));
        setPost({title: '', description:''});
    }



    return (
        <div>
            <MyInput
                type="text"
                placeholder="Название"
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
            />
            <MyInput
                type="text"
                placeholder="Описание"
                value={post.description}
                onChange={e => setPost({...post, description: e.target.value})}
            />
            <button className="btn" onClick={() => createPost()}>Создать</button>
        </div>
    );
};

export default CreatePost;