import React from "react";
// import LineTask from "./LineTask";
import TaskPageLineTask from "./TaskPageLineTask";

const TaskList = ({
    tasks,
    handleCheck,
    handleDelete,
    headerStyle,
    contexts,
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
                />
            ))}
        </ul>
    );
};

export default TaskList;
