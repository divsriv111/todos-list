import React from 'react'

export const Footer = () => {
    let footerStyle = {
        position: "absolute",
        top: "100wh",
        width: "100%",
        boder: "2px solid red"
    }
    return (
        <footer className='bg-dark text-light py-3' style={footerStyle}>
            <p className='text-center'>
                Copyright &copy; MyTodoList.com
            </p>
        </footer>
    )
}
