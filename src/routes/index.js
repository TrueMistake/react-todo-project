import Home from "../pages/Home";
import Todo from "../pages/Todo";
import Calculator from "../pages/Calculator";
import Mtg from "../pages/Mtg";

export const routers = [
    {path: '/', components: <Home/>},
    {path: '/todo', components: <Todo/>},
    {path: '/calculator', components: <Calculator/>},
    {path: '/mtg', components: <Mtg/>}
]