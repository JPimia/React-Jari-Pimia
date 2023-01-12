import TaskList from "./TaskPageTaskList";

const TaskSquare = ({
    tasks,
    handleCheck,
    handleDelete,
    contexts,
    updateTask2,
}) => {
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
                    updateTask2={updateTask2}
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
