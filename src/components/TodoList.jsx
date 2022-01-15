import React from 'react';

const TodoList = ({posts, removePost}) => {
    return (
        <div>
            {posts.map((post, index) =>
                <div className="item-post" key={index}>
                    <div className="item-post__body">
                        <div className="item-post__title">{post.title}</div>
                        <div className="item-post__description">{post.description}</div>
                    </div>
                    <div className="item-post__remove" onClick={() => removePost(post)}>X</div>
                </div>
            )}
        </div>
    );
};

export default TodoList;
