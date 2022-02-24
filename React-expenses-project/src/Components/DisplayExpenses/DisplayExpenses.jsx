import { useEffect, useState } from 'react';
import ExpenseItems from '../ExpenseItems/ExpenseItems'
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter'
import ExpensesForm from '../ExpensesForm/ExpensesForm';
import Chart from '../Chart/Chart'

function DisplayExpenses(props) {

    const [year, setYear]=useState('')
    const saveYear=x=>setYear(x)
const [filteredExpenses, setFilteredExpenses]=useState(props.expenses)

useEffect(()=>{setFilteredExpenses(props.expenses)}, [props.expenses])


const chartDataPoints=[
    {label:'Jan', value:0}, 
{label:'Feb', value:0}, 
{label:'Mar', value:0}, 
{label:'Apr', value:0}, 
{label:'May', value:0}, 
{label:'Jun', value:0}, 
{label:'Jul', value:0}, 
{label:'Aug', value:0}, 
{label:'Sep', value:0}, 
{label:'Oct', value:0}, 
{label:'Nov', value:0}, 
{label:'Dec', value:0}, 
]


for(const expense of filteredExpenses){
const expenseMonth=new Date(expense.date).getMonth()
chartDataPoints[expenseMonth].value+=expense.price
}
    return ( 
<div className="display-expenses">

<ExpensesForm  expenses={props.expenses} setExpenses={props.setExpenses}/>

<Chart expense={filteredExpenses} chartDataPoints={chartDataPoints}/>

<ExpensesFilter saveYear={saveYear}/>

<div className="card">
    {
filteredExpenses.filter(e=>{
if(year==='') return e
else if(e.date.includes(year)) return e
}).map((e,i)=><ExpenseItems  key={i} expense={props.expenses[i]}/>)
    }
    </div>
</div>

     );
}

export default DisplayExpenses;