import React from "react";
// import LineTask from "./LineTask";
import TaskPageLineTask from "./TaskPageLineTask";

const TaskList = ({
    tasks,
    handleCheck,
    handleDelete,
    headerStyle,
    contexts,
    updateTask2,
}) => {
    return (
        <ul>
            <header className="header" style={headerStyle}>
                Tehtävät
            </header>
            {tasks.map((task) => (
                <TaskPageLineTask
                    key={task.id}
                    task={task}
                    contexts={contexts}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                    updateTask2={updateTask2}
                />
            ))}
        </ul>
    );
};

export default TaskList;
