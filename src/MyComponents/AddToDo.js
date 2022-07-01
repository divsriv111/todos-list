import React, { useState } from 'react'

export const AddToDo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setdesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc)
            alert("Title or desc cannot be empty!")

        props.addToDo(title, desc);
    }
    return (
        <div className='container my-3'>
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }}
                        className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="desc" className="form-label">Todo Description</label>
                    <input type="text" value={desc} onChange={(e) => { setdesc(e.target.value) }}
                        className="form-control" id="desc" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Submit</button>
            </form>
        </div>
    )
}
