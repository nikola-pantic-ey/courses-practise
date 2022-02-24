import './expense-items.css'


function ExpenseItems(props) {
    return ( 
        <div className="expense-items">
<div className="expense-name">Title: {props.expense.name}</div>
<div className="expense-date">Date: {props.expense.date}</div>
<div className="expense-price">Amount: {props.expense.price}</div> 
        </div>
     );
}

export default ExpenseItems;