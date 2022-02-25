import React, {useState} from "react"; 
import Modal from './Components/Modal/Modal'
import Card from './Components/Card/Card'
import styled from './app.module.css'

 function App() {

  const[persons, setPersons]=useState([])
const[username, setUsername]=useState('')
const[age, setAge]=useState(0)
   const [modalVisibility, setModalVisibility]=useState(false)
const[modalInfo, setModalInfo]=useState({name:'', age:0})


const addNewUser=(x,y)=>{
if(x.trim() !=='' && y>0) {setPersons([...persons, {name:x, age: y}]); setUsername(''); setAge(0)}
else if(x.trim()==='' || y<=0) {setModalVisibility(true); setModalInfo({name:x, age:y})}
}
   

   return ( 
<div className={styled.app}>

<Modal modalInfo={modalInfo} modalVisibility={modalVisibility} setModalVisibility={setModalVisibility}/>

<div className={styled['adding-form']}>
<div className="name-and-input" style={{width:'100%'}}>
  <div className="person-name">Username</div>
  <input type='text' value={username} onChange={(e)=>setUsername(e.target.value)} style={{width:'100%'}}></input>

</div>
<div className="age-and-input" style={{width:'100%'}}>
<div className="person-age">Age</div>
<input type='number' min='0' value={age} onChange={(e)=>setAge(e.target.value)} style={{width:'100%'}}></input>
</div>

<button onClick={()=>addNewUser(username, age)}>Add person!</button>
</div>


<div className={styled['card-wrapper']}>

{persons.map((e,i)=><Card key={i} e={e}/>)}

</div>


</div>
    );
 }
 
 export default App;