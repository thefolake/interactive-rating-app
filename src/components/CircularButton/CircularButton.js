import React from 'react';
import './_CircularButton.scss'

const CircularButton = ({value, onClick, children}) => {
    return (
        <button
            className='button'
            onClick={onClick}
            value={value}
        >
            {children}
        </button>
    )
}

export default CircularButton;