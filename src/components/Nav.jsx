import React from 'react';
import {Route, Routes, Link} from "react-router-dom";
import {routers} from "../routes";

const Nav = () => {
    return (
        <nav className="nav">
            <ul className="nav-list">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Главная</Link>
                </li>
                <li className="nav-item">
                    <Link to="/todo" className="nav-link">Список задач</Link>
                </li>
                <li className="nav-item">
                    <Link to="/calculator" className="nav-link">Калькулятор</Link>
                </li>
                <li className="nav-item">
                    <Link to="/mtg" className="nav-link">MTG</Link>
                </li>
            </ul>

            <Routes>
                {routers.map(route =>
                    <Route path={route.path} element={route.components} key={route.path}/>
                )}
            </Routes>
        </nav>
    );
};

export default Nav;