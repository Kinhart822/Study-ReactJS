import { useReducer, useRef } from "react";
import { addJob, deleteJob, setJob } from "./actions";
import reducer, { initState } from "./reducer";
import logger from "./logger";

function TodoApp() {
    const [state, dispatch] = useReducer(logger(reducer), initState)
    const { job, jobs } = state

    const inputRef = useRef()

    const handleAddJob = () => {
        dispatch(addJob(job))
        // dispatch(setJob(''))
        inputRef.current.focus()
    }

    const handleDeleteJob = (index) => {
        dispatch(deleteJob(index))
    }

    return (
        <div style={{ padding: 32 }}>
            <h3>To-do list</h3>
            <input
                ref={inputRef}
                value={job}
                placeholder="Enter job..."
                onChange={(e) => dispatch(setJob(e.target.value))}
            />
            <button onClick={handleAddJob}>Add</button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>
                        {job}
                        <button style={{ marginLeft: 10 }} onClick={() => handleDeleteJob(index)}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoApp;