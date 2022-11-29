import TaskList from "./TaskPageTaskList";

const TaskSquare = ({ tasks, handleCheck, handleDelete, contexts }) => {
    const headerStyle = {
        backgroundColor: "mediumblue",
        color: "#eee",
    };

    return (
        <section className="taskSquare">
            {tasks.length ? (
                <TaskList
                    tasks={tasks}
                    contexts={contexts}
                    handleDelete={handleDelete}
                    handleCheck={handleCheck}
                    headerStyle={headerStyle}
                />
            ) : (
                <p style={{ marginTop: "2rem" }}>Ei tehtäviä...</p>
            )}
        </section>
    );
};

TaskSquare.defaultProps = {
    colorValue: "empty color value",
};

export default TaskSquare;
