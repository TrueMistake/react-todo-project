import TodoList from "./components/TodoList";
import CreatePost from "./components/CreatePost";
import {useSelector} from "react-redux";
import MyInput from "./components/MyInput";
import {useState} from "react";

function App() {
    const posts = useSelector(state => state.posts); // Получаем state из redux
    const [search, setSearch] = useState('');


    const searchTodos = str => {
        if (str) {
            return posts.filter(text => text.title.toLowerCase().includes(str.toLowerCase()))
        } else {
            return posts
        }
    }

  return (
    <div className="App">
      <h1>Список задач</h1>
        <MyInput
            type="text"
            placeholder="Поиск"
            onChange={e => setSearch(e.target.value)}
        />
      <div className="wrapper">
        <TodoList posts={searchTodos(search)} />
        <CreatePost/>
      </div>
    </div>
  );
}

export default App;
