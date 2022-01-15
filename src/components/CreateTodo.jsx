import React, {useState} from 'react';
import Input from "./Input";

const CreateTodo = ({createPost}) => {
    const [post, setPost] = useState({title: '', description: ''})

    const addPost = () => {
      const newPost = {
          ...post, id: new Date()
      }
      createPost(newPost)
      setPost({title: '', description: ''})
    }

    return (
        <div>
            <Input
                type="text"
                placeholder="Название"
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
            />
            <Input
                type="text"
                placeholder="Описание"
                value={post.description}
                onChange={e => setPost({...post, description: e.target.value})}
            />
            <button className="btn" onClick={() => addPost()}>Создать</button>
        </div>
    );
};

export default CreateTodo;
