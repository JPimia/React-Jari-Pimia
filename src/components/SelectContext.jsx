const SelectContext = ({ task, context, updateTask }) => {
    const selected = task.context.includes(context.id);
    const handleClick = () => {
        if (!selected) {
            task.context.push(context.id);
            updateTask({
                ...task,
                context: task.context,
            });
        } else {
            updateTask({
                ...task,
                context: task.context.filter((contextId) => {
                    return context.id !== contextId;
                }),
            });
        }
        // setSelected(!selected);
    };
    return (
        <button
            class="button button1"
            onClick={handleClick}
            style={{ backgroundColor: selected ? "lightgreen" : "red" }}
        >
            {context.name}
        </button>
    );
};

export default SelectContext;
