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
    newContext,
    setNewContext,
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
        <>
            <form className="addForm" onSubmit={handleSubmit}>
                <label htmlFor="addTask">Lisää Tehtävä</label>
                <input
                    autoFocus
                    ref={inputRef}
                    id="addTask"
                    type="text"
                    placeholder="Lisää Tehtävä"
                    required
                    defaultValue={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                {/* {createContextButtons()} */}
                <button
                    type="submit"
                    aria-label="Add Task"
                    onClick={() => inputRef.current.focus()}
                >
                    <FaPlus />
                </button>
            </form>
            <form className="addForm" onSubmit={handleSubmit}>
                <label htmlFor="addContext">Lisää konteksti</label>
                <input
                    autoFocus
                    ref={inputRef}
                    id="addTask"
                    type="text"
                    placeholder="Lisää Konteksti"
                    required
                    defaultValue={newContext}
                    onChange={(e) => setNewContext(e.target.value)}
                />
                {/* {createContextButtons()} */}
                <button
                    type="submit"
                    aria-label="Add Context"
                    onClick={() => inputRef.current.focus()}
                >
                    <FaPlus />
                </button>
                {console.log(newContext)}
            </form>
        </>
    );
};

export default AddTask;
