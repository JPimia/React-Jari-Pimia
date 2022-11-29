import TaskList from "./TaskList";

const Square = ({
    tasks,
    handleCheck,
    handleDelete,
    updateTask,
    setInput,
    patchTask,
}) => {
    const headerStyle = {
        backgroundColor: "mediumblue",
        color: "#eee",
    };
    console.log(tasks.tasks);
    return (
        <section className="square">
            {tasks.tasks.length ? (
                <TaskList
                    tasks={tasks.tasks}
                    handleDelete={handleDelete}
                    handleCheck={handleCheck}
                    updateTask={updateTask}
                    headerStyle={headerStyle}
                    setInput={setInput}
                    patchTask={patchTask}
                />
            ) : (
                <p style={{ marginTop: "2rem" }}>Ei tehtäviä...</p>
            )}
        </section>
    );
};

Square.defaultProps = {
    colorValue: "empty color value",
};

export default Square;
