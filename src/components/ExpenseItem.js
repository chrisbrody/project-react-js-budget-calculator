import React from 'react';
import {MdEdit, MdDelete} from 'react-icons/md'

// pass through expense, handleEdit & handleDelete as parameters 
const ExpenseItem = ({expense, handleEdit, handleDelete}) => {
    // set id, charge & amount from expense 
    const { id, charge, amount } = expense
    
    return (
        <li className="item">
            <div className="info">
                <span className="expense">{charge}</span>       
                <span className="">${amount}</span>       
            </div>    
            <div>
                <button className="edit-btn" aria-label="edit button" onClick={() => handleEdit(id)}>
                    <MdEdit />
                </button>
                <button className="delete-btn" aria-label="delete button" onClick={() => handleDelete(id)}>
                    <MdDelete />
                </button>
            </div>
        </li>
    )
}

export default ExpenseItem
