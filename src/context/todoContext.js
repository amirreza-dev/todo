import { createContext } from 'react';

const TodoContext = createContext({
    todos: [],
    todo: '',
    createNewTodo: () => {},
    todoInput: () => {},
    completedTodo: () => {},
    deleteTodo: () => {},
});

export default TodoContext;
