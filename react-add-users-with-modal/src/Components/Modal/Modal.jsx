import style from './modal.module.css'

function Modal(props) {
const text=(x)=>{

if(x.name.trim()==='' && x.age<=0) {return 'You must fill name and age (greater than 0)'}
else if(x.name.trim()==='') return 'You must fill name!'
else if(x.age<=0) return 'You must enter age(above 0)'
}


    return ( 
<div className={props.modalVisibility? style.modal: style.hide}>

<div className={style['modal-inside']}>
    <div>{text(props.modalInfo)}</div>
    <button onClick={()=>props.setModalVisibility(false)}>close</button>
</div>


</div>

     );
}

export default Modal;