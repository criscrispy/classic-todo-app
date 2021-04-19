import React from 'react'
import EditTodoForm from './EditTodoForm'
import useToggleState from './hooks/useToggleState'

import {
    ListItem,
    ListItemText,
    Checkbox,
    IconButton,
    ListItemSecondaryAction,
} from '@material-ui/core'

import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'



function Todo({ id, task, completed, removeTodo, toggleTodo, editTodo }) {

    const [isEditing, toggleIsEditing] = useToggleState(false);

    return (
        <ListItem style={{ height: "64px" }}>
            {isEditing ? (
                /*  id and task is originally a parameters of 
                  Todo passed down to the editTodo func component */
                <EditTodoForm editTodo={editTodo} id={id} task={task} toggleIsEditingForm={toggleIsEditing} />
            ) : (
                <>
                    <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)} />
                    <ListItemText style={{ textDecorationLine: completed ? "line-through" : "none" }}>
                        {task}
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
                            <DeleteIcon />
                        </IconButton>
                        <IconButton aria-label="Edit" onClick={toggleIsEditing} >
                            <EditIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </>
            )}
        </ListItem>
    )
}

export default Todo
