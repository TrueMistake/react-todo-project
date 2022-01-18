import TodoList from "./components/TodoList";
import CreatePost from "./components/CreatePost";
import {useSelector} from "react-redux";

function App() {
 /* const addPost = (post) => {
    setPosts([...posts, post])
  }

  const removePost = (post) => {
    setPosts(posts.filter(item => item.id !== post.id))
  }*/

  const posts = useSelector(state => state.posts); // Получаем state из redux


  return (
    <div className="App">
      <h1>Список задач</h1>
      <div className="wrapper">
        <TodoList posts={posts} />
        <CreatePost/>
      </div>
    </div>
  );
}

export default App;
