// creating custom hook for the TodoApp.js 
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const useTodoState = initialTodos => {

    const [todos, setTodos] = useState(initialTodos);

    const addTodo = newTodoText => {
        /* id is created and passed down as part of todos but key is only set in TodoList func component 
        when todos are mapped over ... (A 1/2)  */
        setTodos([...todos, { id: uuidv4(), task: newTodoText, completed: false }])
    };

    const removeTodo = todoID => {
        // filter out removed todo
        const updatedTodos = todos.filter(todo =>
            todo.id !== todoID)
        // call setTodos on updated Todos array
        setTodos(updatedTodos);
    }

    const toggleTodo = todoID => {
        const updatedTodos = todos.map(todo =>
            todo.id === todoID ? { ...todo, completed: !todo.completed } : todo);
        setTodos(updatedTodos);
    }

    const editTodo = (todoID, newTask) => {
        const updatedTodos = todos.map(todo =>
            todo.id === todoID ? { ...todo, task: newTask } : todo);
        setTodos(updatedTodos);
    }

    return { todos, addTodo, removeTodo, toggleTodo, editTodo }

}

export default useTodoState;
