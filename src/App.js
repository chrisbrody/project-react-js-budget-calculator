import React, {useState, useEffect} from 'react';
import './App.css';
import Alert from './components/Alert';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import uuid from 'uuid/v4'
import { MdRefresh } from 'react-icons/md';

// create starting state
// const InitialExpenses = [
//   {id:uuid(), charge:"rent", amount:1600},
//   {id:uuid(), charge:"car payment", amount:400},
//   {id:uuid(), charge:"credit card bill", amount:1200},
// ]

// get local storage 
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
    console.log('we called useEffect');
    localStorage.setItem('expenses', JSON.stringify(expenses))
    
  },[expenses])
  
  // **************** functionality ****************
  // handle charge text
  const handleCharge = e => {
    // update charge name on change - ExpenseForm.js
    setCharge(e.target.value);
  }
  // handle amount number
  const handleAmount = e => {
    setAmount(e.target.value);
  }
  // handle alert
  const handleAlert = ({type, text}) => {
    setAlert({show:true, type, text})
    setTimeout(() => {
      setAlert({show:false})
    }, 3000)
  }
  // handle submit 
  const handleSubmit = e => {
    // stop website refresh
    e.preventDefault();

    // if both fields are not empty 
    if(charge !== "" && amount > 0) {
      if(edit) {
        let tempExpenses = expenses.map(item => {
          return item.id === id ?{...item,charge,amount} :item
        })
        // update all expenses 
        setExpenses(tempExpenses);
        // change edit state back to false so user can submit again
        setEdit(false);

      } else {
        // create a single expense
        const singleExpense = {id:uuid(), charge, amount}
        // add to already exisiting list of expenses
        setExpenses([...expenses, singleExpense])
        handleAlert({type:'success', text:'item edited'})
      }
      
      // clear input fields
      setCharge('')
      setAmount('')
      
    } else if(charge === "") {
      handleAlert({type:'danger', text:'Charge is empty, please try again'})
    } else if (amount <= 0) {
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
    let expense = expenses.find(item => item.id === id) ;
    let {charge, amount} = expense
    setCharge(charge)
    setAmount(amount)
    setEdit(true)
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
        <ExpenseForm 
          charge={charge} 
          amount={amount} 
          handleAmount={handleAmount} 
          handleCharge={handleCharge} 
          handleSubmit={handleSubmit}
          edit={edit}
        />
        <ExpenseList expenses={expenses} clearItems={clearItems} handleEdit={handleEdit} handleDelete={handleDelete}/>
      </main> 
      <h1>
        total spending : <span className="total">
          ${expenses.reduce( (accumulator, current) => {
            return accumulator += parseInt(current.amount)
          },0 )}
        </span>
      </h1>
    </>
  );
}

export default App;
