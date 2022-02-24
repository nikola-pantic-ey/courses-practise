import { useState } from 'react';
import './App.css';
import DisplayExpenses from './Components/DisplayExpenses/DisplayExpenses.jsx'

function App() {



const someExpenses=[ 
   {name: 'Book',
    date: new Date(2022,1,1).toLocaleDateString('en-us'), 
    price: 5000},
    {name: 'Book 2',
      date: new Date(2022,11, 5).toLocaleDateString('en-us'), 
      price: 2000}, 
      {name: 'Book 3',
       date: new Date(2020,11, 20).toLocaleDateString('en-us'), 
       price: 3000}]

const [expenses, setExpenses]=useState(someExpenses)


  return (
    <div className="app">

<DisplayExpenses expenses={expenses} setExpenses={setExpenses}/>
    </div>
  );
}

export default App;
