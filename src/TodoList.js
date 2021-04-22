import React from 'react'
import { Paper, List, Divider } from '@material-ui/core'

import Todo from "./Todo"


function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
    console.log(todos)
    if (todos.length)
        return (
            <Paper
                style={{ margin: "1rem 0", }}
            >
                <List>
                    {todos.map((todo, i) =>
                        // JSX fragment - helps to group things. It wont result in any extra markup.
                        /* To add a key to a fragment, we have to use the long-hand version
                        rather than <> </>, we have to use <React.Fragment> */
                        <React.Fragment key={i}>
                            {/* This is where the key is set (A 2/2), 
                            you can spread the assisgn them before passing them down */}
                            <Todo
                                {...todo}
                                /* task={todo.task}
                                id={todo.id}
                                completed={todo.completed} */
                                key={todo.id}
                                removeTodo={removeTodo}
                                toggleTodo={toggleTodo}
                                editTodo={editTodo}
                            />
                            {/* Showing the divider under 
                         all the todos apart from the last one,
                         i - index of todos from map, 
                         */}
                            {i < todos.length - 1 && <Divider />}
                        </ React.Fragment >
                    )}
                </List>
            </Paper>
        )
    return null;
}

export default TodoList
