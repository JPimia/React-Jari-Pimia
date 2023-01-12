import React, { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import TaskSquare from "../taskPageComponents/TaskSquare";
import TaskFooter from "../taskPageComponents/TaskFooter";
import AddTask from "../components/AddTask";
import apiRequest from "../components/ApiRequest";

const Stats = ({ tasks, handleDelete, contexts, setTasks }) => {
    const API_URL = "http://localhost:3010/tasks";

    useEffect(() => {
        console.log(tasks);
        console.log(contexts);
    });

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
    const updateTask2 = (task) => {
        if (!task.task || /^\s*$/.test(task.task)) {
            return;
        }
        console.log(task);
        const modifiedTasks = tasks.map((t) => {
            return task.id === t.id ? task : t;
        });
        console.log(modifiedTasks);
        setTasks(modifiedTasks);
        patchTask(task);
    };
    const patchTask = async (task) => {
        const updateOptions = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/JSON",
            },
            body: JSON.stringify(task),
        };
        const reqUrl = `${API_URL}/${task.id}`;
        // eslint-disable-next-line no-unused-vars
        const result = await apiRequest(reqUrl, updateOptions);
    };

    return (
        <div>
            <TaskSquare
                tasks={tasks}
                contexts={contexts}
                handleDelete={handleDelete}
                updateTask2={updateTask2}
            />
            <TaskFooter length={tasks.length} />
        </div>
    );
};

TaskSquare.defaultProps = {
    colorValue: "empty color value",
};

export default Stats;
