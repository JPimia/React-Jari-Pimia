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
    const [contexts, setContexts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchTasks = async () => {
        try {
            const response = await fetch(API_URL + "/tasks");
            const listTasks = await response.json();
            setTasks(listTasks);
        } catch (err) {
            console.log(err.stack);
        }
    };
    const fetchContexts = async () => {
        try {
            const response = await fetch(API_URL + "/contexts");
            if (!response.ok) throw Error("Did not receive data");
            const listContexts = await response.json();
            setContexts(listContexts);
            setIsLoading(false);
        } catch (err) {
        } finally {
        }
    };

    useEffect(() => {
        fetchTasks();
        fetchContexts();
    }, []);
    console.log(contexts);
    return (
        <>
            <Navbar />
            <div className="App-header">
                {isLoading ? (
                    <p>Ladataan tehtäviä...</p>
                ) : (
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <MainPage
                                    tasks={tasks}
                                    contexts={contexts}
                                    setContexts={setContexts}
                                    setTasks={setTasks}
                                />
                            }
                        />
                        <Route path="/info" element={<Info />} />
                        <Route
                            path="/stats"
                            element={
                                <Stats
                                    tasks={tasks}
                                    contexts={contexts}
                                    setContexts={setContexts}
                                    setTasks={setTasks}
                                />
                            }
                        />
                        <Route path="/random/*" element={<RandomPage />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                )}
            </div>
        </>
    );
}
