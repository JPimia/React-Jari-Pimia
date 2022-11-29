import { useEffect, useState } from "react";
const SelectContext = ({ task, context }) => {
    const handleClick = () => {
        setSelected(!selected);
    };

    const [selected, setSelected] = useState(task.context.includes(context.id));
    return (
        <button
            onClick={handleClick}
            style={{ color: selected ? "green" : "red" }}
        >
            {context.name}
        </button>
    );
};

export default SelectContext;
