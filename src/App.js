import TodoList from "./components/TodoList";
import CreateTodo from "./components/CreateTodo";
import {useState} from "react";

function App() {
  const [posts, setPosts] = useState([
    {title: 'Первый пост', description: 'Описание'}
  ])

    const createPost = (newPost) => {
      setPosts([...posts,newPost])
    }

    const removePost = (post) => {
      setPosts(posts.filter(item => item.id !== post.id))
    }


  return (
    <div className="App">
      <h1>Список задач</h1>
      <div className="wrapper">
        <TodoList posts={posts} removePost={removePost}/>
        <CreateTodo createPost={createPost}/>
      </div>
    </div>
  );
}

export default App;
