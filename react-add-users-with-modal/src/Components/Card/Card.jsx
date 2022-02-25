import styled from './card.module.css'


function Card(props) {
    return ( 
<div className={styled.card}>
<div className="user">{props.e.name}, {props.e.age} year(s) old</div>


</div>

     );
}

export default Card;