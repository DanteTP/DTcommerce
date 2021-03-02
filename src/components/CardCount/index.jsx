import './style.css'
import React, { useState } from 'react'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const CardCount = (props) =>{
    const [qty,SetQty] = useState(1)


    const counterValue = (qty,initial) =>{return initial>qty? initial:qty}


   

    return(
        <>
        <div className="counter">
        {!props.filter(props.prod.id)?<><button className="boton" onClick={() => qty>props.initial? SetQty(qty - 1):""}>-</button>
        <div className="number">{counterValue(qty,props.initial)}</div>
        <button className="boton"onClick={() => qty<props.stock? SetQty(qty + 1):""}>+</button></>:null}</div>
        {!props.filter(props.prod.id)?<button className="cardbutton" onClick={()=> props.handlerAdd(props.prod,qty)}><AddShoppingCartIcon/></button>:<button className="cardbuttonadd"><ShoppingCartIcon/></button>}
        </>
    )
}

export default CardCount