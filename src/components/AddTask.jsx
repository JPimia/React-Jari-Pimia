import { hasSelectionSupport } from "@testing-library/user-event/dist/utils";
import { useRef, useState } from "react";
import { FaPlus } from "react-icons/fa";
import SelectContext from "./SelectContext";

const AddTask = ({
    newTask,
    setNewTask,
    setContext,
    handleSubmit,
    handleContext,
    edit,
    submitUpdate,
    props,
    contexts,
}) => {
    const inputRef = useRef();
    const [input, setInput] = useState("");
    const [task, setTask] = useState({
        task: "",
        context: [],
    });
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
        <form className="addForm" onSubmit={handleSubmit}>
            <label htmlFor="addTask">Lisää Tehtävä</label>
            <input
                autoFocus
                ref={inputRef}
                id="addTask"
                type="text"
                placeholder="Lisää Tehtävä"
                required
                value={newTask}
                onChange={(e) => setTask({ task: e.target.value })}
            />
            {createContextButtons()}
            <button
                type="submit"
                aria-label="Add Task"
                onClick={() => inputRef.current.focus()}
            >
                <FaPlus />
            </button>
        </form>
    );
};

export default AddTask;
