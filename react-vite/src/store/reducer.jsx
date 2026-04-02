import { ADD_TODO, SET_TODO_INPUT } from "./constants";

export const initState1 = {
    todoInput: '',
    todos: []
};

const reducer1 = (state, action) => {
    switch (action.type) {
        case SET_TODO_INPUT:
            return { ...state, todoInput: action.payload };
        case ADD_TODO:
            return { ...state, todos: [...state.todos, state.todoInput], todoInput: '' };
        default:
            throw new Error('Invalid action');
    }
};

export default reducer1;