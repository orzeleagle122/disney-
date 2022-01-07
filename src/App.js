import React from 'react';
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

function App() {
    return (

        <div className="App">
            <Header/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </div>

    );
}

export default App;
