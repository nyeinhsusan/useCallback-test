import React, { memo } from 'react'

const Lists = ({ items, addItem }) => {
    console.log("Item page loading running");
    return (
        <div>
            <ul>
                {items.map((items, index) => (<li key={index}>{items}</li>))}
                <input type='button' onClick={() => addItem()} value='Add New Item' />
            </ul>
        </div>
    )
}

export default memo(Lists)
