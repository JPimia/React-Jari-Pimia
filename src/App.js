import "./App.css";
import Navbar from "./Navbar";
import React, { useState, useEffect } from "react";

import { Routes, Route } from "react-router-dom";

//pages
import MainPage from "./pages/index";
import PageNotFound from "./pages/404";
import Stats from "./pages/stats";
import RandomPage from "./pages/random";
import Info from "./pages/info";

export default function App() {
    const API_URL = "http://localhost:3010";
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        try {
            const response = await fetch(API_URL + "/tasks");
            const listTasks = await response.json();
            setTasks(listTasks);
        } catch (err) {
            console.log(err.stack);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    useEffect(() => {
        console.log(tasks);
    });
    return (
        <>
            <Navbar />
            <div className="App-header">
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/info" element={<Info />} />
                    <Route path="/stats" element={<Stats tasks={tasks} />} />
                    <Route path="/random/*" element={<RandomPage />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </div>
        </>
    );
}
