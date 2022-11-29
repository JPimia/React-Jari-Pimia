//import React, { useState, useEffect } from "react";
import { useState, useEffect } from "react";
import Square from "../components/Square";
import Footer from "../components/Footer";
import AddTask from "../components/AddTask";
import SelectContext from "../components/SelectContext";
import apiRequest from "../components/ApiRequest";

const MainPage = (tasks, contexts, setTasks, setContexts) => {
    const API_URL = "http://localhost:3010/tasks";

    const [fetchError, setFetchError] = useState(null);

    useEffect(() => {
        console.log(tasks);
        console.log(contexts);
    });

    const [newTask, setNewTask] = useState("");
    const [context, setContext] = useState(0);
    const [input, setInput] = useState("");
    const [edit, setEdit] = useState({
        id: null,
        value: "",
    });

    const submitUpdate = (value) => {
        updateTask(edit.id, value);
        setEdit({
            id: null,
            value: "",
        });
    };

    if (edit.id) {
        <AddTask edit={edit} submitUpdate={submitUpdate} />;
    }

    const updateTask = (taskId, newValue) => {
        if (!newValue || /^\s*$/.test(newValue)) {
            return;
        }
        const modifiedTasks = tasks.map((task) => {
            return task.id === taskId ? { ...task, task: newValue } : task;
        });
        console.log(modifiedTasks);
        setTasks(modifiedTasks);
    };
    const patchTask = async (task) => {
        const updateOptions = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/JSON",
            },
            body: JSON.stringify({ task: task.task }),
        };
        const reqUrl = `${API_URL}/${task.id}`;
        const result = await apiRequest(reqUrl, updateOptions);
        if (result) setFetchError(result);
    };

    const setAndSaveTasks = (newTask) => {
        setTasks(newTask);
    };

    const addTask = async (task) => {
        const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
        const myNewTask = { id, checked: false, task };
        const listTasks = [...tasks, myNewTask];
        setAndSaveTasks(listTasks);

        const postOptions = {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(myNewTask),
        };
        const result = await apiRequest(API_URL, postOptions);
        if (result) setFetchError(result);
    };

    const handleCheck = async (id) => {
        const listTasks = tasks.map((task) =>
            task.id === id ? { ...task, checked: !task.checked } : task
        );
        setAndSaveTasks(listTasks);
        const myTask = listTasks.filter((task) => task.id === id);
        const updateOptions = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/JSON",
            },
            body: JSON.stringify({ checked: myTask[0].checked }),
        };
        const reqUrl = `${API_URL}/${id}`;
        const result = await apiRequest(reqUrl, updateOptions);
        if (result) setFetchError(result);
    };

    const handleDelete = async (id) => {
        const listTasks = tasks.filter((task) => task.id !== id);
        setAndSaveTasks(listTasks);

        const deleteOptions = { method: "DELETE" };
        const reqUrl = `${API_URL}/${id}`;
        const result = await apiRequest(reqUrl, deleteOptions);
        if (result) setFetchError(result);
    };

    const handleContext = (context) => {
        const taskContext = tasks.map((task) =>
            task.context === context
                ? { ...task, checked: !task.checked }
                : task
        );
        setContext(taskContext);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newTask) return;
        // lisätään tehtävä ja tyhjätään form
        addTask(newTask, context);
        setNewTask("");
    };

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    return (
        <div className="App">
            {fetchError && (
                <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>
            )}

            {!fetchError && (
                <Square
                    tasks={tasks}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                    updateTask={updateTask}
                    setInput={setInput}
                    patchTask={patchTask}
                />
            )}
            {!fetchError && <Footer length={tasks.length} />}
            {!fetchError && (
                <AddTask
                    newTask={newTask}
                    context={context}
                    contexts={contexts}
                    setContext={setContext}
                    setNewTask={setNewTask}
                    handleSubmit={handleSubmit}
                    handleContext={handleContext}
                />
            )}
            {/* <SelectContext /> */}
            {/* <SelectContext /> */}
        </div>
    );
};

export default MainPage;
