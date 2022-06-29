import React from 'react'

export const TodoItem = ({ todo }) => {
    return (
        <div>
            {/* <h4>{todo.sno1}</h4> */}
            <h4>{todo.title}</h4>
            <p>{todo.description}</p>
            <button className='btn btn-sm btn-danger'>Delete</button>
        </div>
    )
}
