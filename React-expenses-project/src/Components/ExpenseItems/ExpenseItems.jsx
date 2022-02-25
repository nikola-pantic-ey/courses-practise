import { useState } from 'react';
import styled from 'styled-components'





const ExpenseItemsStyled=styled.div`
display: flex;
align-items: center;
justify-content: space-around;
width:100%;
margin: 50px auto;
padding: 20px;
background-color: rebeccapurple;
color:white;
`

const ExpenseName=styled.div`
background-color:red
`

function ExpenseItems({expense}) {
    const [valid, setValid]=useState(true)

    const changeValid=()=>{ setValid(!valid)}
    
    return ( 
        <ExpenseItemsStyled className={!valid && 'invalid'}>
{/* <div className="expense-name">Title: {expense.name}</div> */}
<ExpenseName onClick={changeValid}>Title: {expense.name}</ExpenseName>
<div className="expense-date">Date: {expense.date}</div>
<div className="expense-price">Amount: {expense.price}</div> 
        </ExpenseItemsStyled>
     );
}




export default ExpenseItems;