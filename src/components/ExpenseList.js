import React from 'react';
import Item from './ExpenseItem';
import { MdDelete } from 'react-icons/md';
import uuid from 'uuid/v4';

const ExpenseList = ({expenses, handleEdit, handleDelete, clearItems}) => {
        
    return (
        <>
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


// import React from 'react';
// import Item from './ExpenseItem';

// const ExpenseList = (props) => {
//     return (
//         <div>
//             hello from expense list
//             <Item />
//         </div>
//     )
// }

// export default ExpenseList
