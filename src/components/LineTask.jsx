import React from "react";
import { FaCheckSquare, FaTrashAlt, FaRegEdit } from "react-icons/fa";
import { useRef, useState } from "react";

const LineTask = ({
    task,
    handleCheck,
    handleDelete,
    updateTask,
    patchTask,
}) => {
    const handleEdit = () => {
        patchTask(task);
        setEditMode(false);
    };
    const inputRef = useRef();
    const [editMode, setEditMode] = useState(false);
    if (!editMode) {
        return (
            <li className="item">
                <input
                    type="checkbox"
                    onChange={() => handleCheck(task.id)}
                    checked={task.checked}
                />
                <label
                    style={
                        task.checked ? { textDecoration: "line-through" } : null
                    }
                    onDoubleClick={() => handleCheck(task.id)}
                >
                    {task.task}
                </label>
                <FaRegEdit
                    onClick={() => setEditMode(true)}
                    role="button"
                    tabIndex="0"
                    aria-label={`Edit ${task.item}`}
                />

                <FaTrashAlt
                    onClick={() => handleDelete(task.id)}
                    role="button"
                    tabIndex="0"
                    aria-label={`Delete ${task.item}`}
                />
            </li>
        );
    } else {
        return (
            <form className="editForm" onSubmit={handleEdit}>
                <label htmlFor="editTask"></label>
                <input
                    autoFocus
                    ref={inputRef}
                    id="editTask"
                    type="text"
                    placeholder="Edit Task"
                    defaultValue={task.task}
                    onChange={(e) => {
                        console.log(e.target.value);
                        updateTask(task.id, e.target.value);
                    }}
                />
                <button
                    type="submit"
                    aria-label="Edit Task"
                    onClick={() => inputRef.current.focus()}
                >
                    <FaCheckSquare />
                </button>
            </form>
        );
    }
};

export default LineTask;
