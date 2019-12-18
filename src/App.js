import React, {useState, useEffect} from 'react';
import './App.css';
import Alert from './components/Alert';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import uuid from 'uuid/v4';

// create starting state
// const InitialExpenses = [
//   {id:uuid(), charge:"rent", amount:1600},
//   {id:uuid(), charge:"car payment", amount:400},
//   {id:uuid(), charge:"credit card bill", amount:1200},
// ]

// get local storage data for expenses or an empty string if expenses does not exist in local storage
const InitialExpenses = localStorage.getItem('expenses') ? JSON.parse(localStorage.getItem('expenses')) : []

function App() {
  // **************** state value ****************
  // all expenses, add expense
  const [expenses, setExpenses] = useState(InitialExpenses);
  // single expense
  const [charge, setCharge] = useState('');
  // single charge
  const [amount, setAmount] = useState('');
  // alert
  const [alert, setAlert] = useState({show:false});
  // edit expense
  const [edit, setEdit] = useState(false);
  // id 
  const [id, setId] = useState(0);

  // **************** useEffect ****************
  useEffect(() => {
    // set items in local storage anytime the expenses useState is changed
    localStorage.setItem('expenses', JSON.stringify(expenses))
    
  },[expenses])
  
  // **************** functionality ****************
  // handle charge text
  const handleCharge = e => {
    // update the charge - ExpenseForm.js
    setCharge(e.target.value);
  }
  // handle amount number
  const handleAmount = e => {
    // update the amount - ExpenseForm.js
    setAmount(e.target.value);
  }
  // handle alert
  const handleAlert = ({type, text}) => {
    // set alert show property to true and change the text property to the text passed through in whatever alert you need to call
    setAlert({show:true, type, text});
    // set timeout to 3s
    setTimeout(() => {
      // set alert show property to false 
      setAlert({show:false})
    }, 3000)
  }
  // handle submit 
  const handleSubmit = e => {
    // stop website refresh
    e.preventDefault();

    // if both fields are not empty 
    if(charge !== "" && amount > 0) {
      // if edit it true 
      if(edit) {
        // store tempExpenses from the current expenses
        let tempExpenses = expenses.map(item => {
          // return any item where item.id === id then add to the existing array of item or just get the item
          return item.id === id ? {...item,charge,amount} : item
        })
        // update all expenses 
        setExpenses(tempExpenses);
        // change edit state back to false so user can submit again
        setEdit(false);
        // alert item was edited
        handleAlert({type:'success', text:'item edited'})
      } else {
        // create a single expense to add to the list of expenses
        const singleExpense = {
          id:uuid(), 
          charge, 
          amount
        }

        // add to already exisiting list of expenses
        setExpenses([...expenses, singleExpense]);

        // alert item was added
        handleAlert({type:'success', text:'item added'});
      }
      
      // clear input fields
      setCharge('')
      setAmount('')
      
    } else if(charge === "") {
      // alert Charge is empty, please try again
      handleAlert({type:'danger', text:'Charge is empty, please try again'})
    } else if (amount <= 0) {
      // alert Amount should be greater than zero, please try again
      handleAlert({type:'danger', text:'Amount should be greater than zero, please try again'})
    }
  }
  // clear all expenses
  const clearItems = () => {
    // setExpenses to empty array
    setExpenses([])
    // alert user to all items being deleted
    handleAlert({type:'danger', text:'all items deleted'})
  }
 
  // handle edit 
  const handleEdit = (id) => {
    // store expense from the item that matches the id passed in as the parameter
    let expense = expenses.find(item => item.id === id) ;
    // store chare and amount from expense 
    let {charge, amount} = expense
    // update charge to the text in charge
    setCharge(charge)
    // update the amount to the number in amount
    setAmount(amount)
    // update edit state to true 
    setEdit(true)
    // update the id state to the parameter passed through
    setId(id)
  }
  // handle delete 
  const handleDelete = (id) => {
    // store filtered expenses 
    let tempExpenses = expenses.filter(item => item.id !== id)
    // update setExpenses using filtered expenses
    setExpenses(tempExpenses)
    // alert user to a single items being deleted
    handleAlert({type:'danger', text:'item deleted'})
  }
  
  return (
    // react fragment
    <>
      {/* if alert.show is ever true, display the alert */}
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <Alert />
      <h1>budget calculator</h1>
      <main className="App">
        {/* 
          pass through: charge, amount, handleAmount, handleChange, handleSubmit & edit
        */}
        <ExpenseForm 
          charge={charge} 
          amount={amount} 
          handleAmount={handleAmount} 
          handleCharge={handleCharge} 
          handleSubmit={handleSubmit}
          edit={edit}
        />
        {/* 
          pass through: expenses, clearItems, handleEdit & handleDelete
        */}
        <ExpenseList expenses={expenses} clearItems={clearItems} handleEdit={handleEdit} handleDelete={handleDelete}/>
      </main> 
      <h1>
        total spending : <span>
          ${expenses.reduce( (accumulator, current) => {
            return accumulator += parseInt(current.amount)
          },0 )}
        </span>
      </h1>
    </>
  );
}

export default App;
