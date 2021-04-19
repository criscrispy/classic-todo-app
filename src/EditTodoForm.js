import React from 'react'
import { TextField } from '@material-ui/core';
import useInputState from './hooks/useInputState'


function EditTodoForm({ id, editTodo, task, toggleIsEditingForm }) {
    const [value, handleValueChange, resetValue] = useInputState(task);

    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                editTodo(id, value);
                toggleIsEditingForm();
                resetValue();
            }}
            style={{ margin: "1rem", width: "75%" }}
        >
            <TextField
                margin='normal'
                value={value}
                onChange={handleValueChange}
                fullWidth
                autoFocus
            />
        </form>
    )
}

export default EditTodoForm
