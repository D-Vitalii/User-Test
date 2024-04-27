import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Users from './pages/Users.jsx';


const App = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>} ></Route>
            <Route path="/user/:id" element={<Users/>} ></Route>
        </Routes>
    );
};

export default App;