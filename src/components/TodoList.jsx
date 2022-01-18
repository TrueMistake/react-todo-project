import React from 'react';
import {useDispatch} from "react-redux";
import {removeTodo} from "../store/actions/todo";

const TodoList = ({posts}) => {
    const dispatch = useDispatch();

    return (
        <div>
            {posts.map((post, index) =>
                <div className="post-item" key={index}>
                    <div className="post-item__body">
                        <div className="post-item__title">{post.title}</div>
                        <div className="post-item__description">{post.description}</div>
                    </div>
                    <div
                        className="post-item__remove" onClick={() => dispatch(removeTodo(post))}>X</div>
                </div>
            )}
        </div>
    );
};

export default TodoList;