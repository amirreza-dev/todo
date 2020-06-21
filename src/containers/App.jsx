import React, { useState } from 'react';
import { Route, Switch } from 'react-router';
import uuidv4 from 'uuid/v4';
import { ToastContainer, toast } from 'react-toastify';
import TodoContext from '../context/todoContext';
import Todos from '../components/Task/Todos';
import AddNewTask from '../components/Task/AddNewTask';
import About from '../components/About';

const App = () => {
    const [todos, setTodos] = useState([]);
    const [getTodo, setTodo] = useState('');

    const createNewTodo = () => {
        const getTodos = [...todos];
        const todo = {
            id: uuidv4(),
            text: getTodo,
            completed: false,
        };
        if (todo.text !== '' && todo.text !== ' ') {
            getTodos.push(todo);
            setTodos(getTodos);
            setTodo('');
            toast.success(`${todo.text} یادداشت شد.`, {
                position: 'top-right',
            });
        } else {
            toast.error('فیلد خالی می باشد!', {
                position: 'top-right',
            });
        }
    };

    const completedTodo = (id) => {
        const getTodos = [...todos];
        const todoIndex = getTodos.findIndex((t) => t.id === id);
        const todo = getTodos[todoIndex];
        todo.completed = !todo.completed;
        getTodos[todoIndex] = todo;
        setTodos(getTodos);
    };

    const deleteTodo = (id) => {
        const getTodos = [...todos];
        const filteredTodos = getTodos.filter((t) => t.id !== id);
        setTodos(filteredTodos);
        const deleted = getTodos.findIndex((d) => d !== d.id);
        const todo = getTodos[deleted];
        toast.info(`${todo.text} با موفقیت پاک شد.`, {
            position: 'top-right',
        });
    };

    const todoInput = (event) => {
        setTodo(event.target.value);
    };

    return (
        <TodoContext.Provider
            value={{
                todos: todos,
                todo: getTodo,
                createNewTodo: createNewTodo,
                todoInput: todoInput,
                completedTodo: completedTodo,
                deleteTodo: deleteTodo,
            }}
        >
            <div className='d-flex rtl justify-content-center container'>
                <div className='col-md-8'>
                    <div className='card-hover-shadow-2x mb-3 card'>
                        <Switch>
                            <Route path='/' component={Todos} />
                            <Route path='/about' component={About} />
                        </Switch>
                    </div>
                </div>
            </div>
            <AddNewTask />
            <ToastContainer />
        </TodoContext.Provider>
    );
};

export default App;
