import React from 'react';
import Item from './ExpenseItem';
import { MdDelete } from 'react-icons/md';

// pass through expense, handleEdit, handleDelete & clearItems as parameters 
const ExpenseList = ({expenses, handleEdit, handleDelete, clearItems}) => {
        
    return (
        <>
            {/* display the UL list from ExpenseItem.js  */}
            <ul className="list">
                {expenses.map((expense) => {
                    return (
                        <Item 
                            key={expense.id} 
                            expense={expense} 
                            handleEdit={handleEdit} 
                            handleDelete={handleDelete}
                        />
                    );
                })}
            </ul>
            {/* if expenses.length > 0 then render everything after && */}
            {/* display clear all expenses button if expenses exist */}
            {expenses.length > 0 && (
                <button className="btn" onClick={clearItems}>
                    clear all expenses
                    <MdDelete className="btn-icon" />
                </button>
            )}
        </>
    )
}

export default ExpenseList