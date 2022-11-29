import React, { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import Task from "../components/task";
import TaskSquare from "../taskPageComponents/TaskSquare";
import TaskFooter from "../taskPageComponents/TaskFooter";
import AddTask from "../components/AddTask";

const Stats = ({
    tasks,
    handleCheck,
    handleDelete,
    contexts,
    setContexts,
    setTasks,
}) => {
    const headerStyle = {
        backgroundColor: "mediumblue",
        color: "#eee",
    };

    return (
        <div>
            <TaskSquare
                tasks={tasks}
                contexts={contexts}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
            />

            <TaskFooter length={tasks.length} />
        </div>
    );
};

TaskSquare.defaultProps = {
    colorValue: "empty color value",
};

export default Stats;
