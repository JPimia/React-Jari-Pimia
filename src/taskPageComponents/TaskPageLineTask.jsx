import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";
import SelectContext from "../components/SelectContext";
import { useEffect } from "react";

const TaskPageLineTask = ({ task, handleCheck, handleDelete, contexts }) => {
    const createContextButtons = () => {
        return (
            <ul>
                {contexts.map((context) => {
                    return (
                        <li
                            key={context.id}
                            style={{
                                display: "inline",
                                listStyle: "none",
                                paddingRight: "54px",
                            }}
                        >
                            <SelectContext task={task} context={context} />
                        </li>
                    );
                })}
            </ul>
        );
    };
    return (
        <li className="item">
            <label
                style={task.checked ? { textDecoration: "line-through" } : null}
                onDoubleClick={() => handleCheck(task.id)}
            >
                {task.task}
            </label>
            {createContextButtons()}
            <FaTrashAlt
                onClick={() => handleDelete(task.id)}
                role="button"
                tabIndex="0"
                aria-label={`Delete ${task.item}`}
            />
            <FaCheckSquare
                onClick={() => handleDelete(task.id)}
                role="button"
                tabIndex="0"
                aria-label={`Delete ${task.item}`}
            />
        </li>
    );
};

export default TaskPageLineTask;
