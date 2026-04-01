import { ADD_JOB, DELETE_JOB, SET_JOB } from "./constants";

export const initState = {
    job: '',
    jobs: []
};

const reducer = (state, action) => {

    switch (action.type) {
        case SET_JOB:
            return {
                ...state,
                job: action.payload
            };
        case ADD_JOB:
            return {
                ...state,
                // job: '',
                jobs: [...state.jobs, state.job]
            };
        case DELETE_JOB:
            const newJobs = [...state.jobs]
            newJobs.splice(action.payload, 1)

            return {
                ...state,
                jobs: newJobs
            };
        default:
            throw new Error('Invalid action');
    }
};

export default reducer;