import React from 'react'

export const TodoItem = ({ todo, onDelete }) => {
    return (
        <div>
            {/* <h4>{todo.sno1}</h4> */}
            <h4>{todo.title}</h4>
            <p>{todo.description}</p>
            <button className='btn btn-sm btn-danger' onClick={onDelete}>Delete</button>
        </div>
    )
}
