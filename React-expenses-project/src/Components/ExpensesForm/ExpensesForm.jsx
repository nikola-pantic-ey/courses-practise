import { useState } from 'react';
import styles from './expenses-form.module.css'

function ExpensesForm(props) {

    const[formVisibility, setFormVisibility]=useState(false)
    
    const [expense, setExpense]=useState('')
const [amount, setAmount]=useState(0)
const [date, setDate]=useState('')

let day=new Date().getDate()
let month=new Date().getMonth()+1
let year=new Date().getFullYear()
let today=year+'-'+month+'-'+day


const addNewExpense=()=>{
if(expense!=='' && amount>0 && date!==''){

props.setExpenses([...props.expenses, {name:expense, date:new Date(date).toLocaleDateString('en-us'), price:+amount}])

}

else alert('You must fill all fields')

}

if(formVisibility===false){

    return ( 
        <div className={styles['expenses-form']}>
            <button className='add-new-expense-button' onClick={()=>setFormVisibility(true)}>Add new expense</button>
        </div>
    )
}
else return (
<div className={styles['expenses-form']}>
    <div className="form-fields">
    <div className='form-field'>
        <div>Expense</div>
        <input type="text" value={expense} onChange={e=>setExpense(e.target.value)}/>
    </div>
    <div className='form-field'>
        <div>Amount</div>
        <input type="number" value={amount} onChange={e=>setAmount(e.target.value)} />
    </div>
    <div className='form-field'>
        <div>Date</div>
        <input type='date' value={date} max={today} onChange={e=>setDate(e.target.value)} />
    </div>
    <div>
    <button className='form-field' onClick={()=>{setFormVisibility(false);
    setExpense('');
        setAmount(0);
        setDate('');}}>Cancel</button>
    <button onClick={()=>{addNewExpense();
         setFormVisibility(false);
        setExpense('');
        setAmount(0);
        setDate('');
        
        }
         }>Add expense</button>
    </div>
    </div>
   
</div>

)
}

export default ExpensesForm;
