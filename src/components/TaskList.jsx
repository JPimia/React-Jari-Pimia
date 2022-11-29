import React from "react";
import LineTask from "./LineTask";

const TaskList = ({
    tasks,
    handleCheck,
    handleDelete,
    updateTask,
    headerStyle,
    setInput,
    patchTask,
}) => {
    return (
        <ul>
            <header className="header" style={headerStyle}>
                Tehtävät
            </header>
            {tasks.map((task) => (
                <LineTask
                    key={task.id}
                    task={task}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                    updateTask={updateTask}
                    setInput={setInput}
                    patchTask={patchTask}
                />
            ))}
        </ul>
    );
};

export default TaskList;
