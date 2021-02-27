import './style.css'
import React, { useState } from 'react'


const CardCount = (props) =>{
    const [qty,SetQty] = useState(1)


    const counterValue = (qty,initial) =>{return initial>qty? initial:qty}


   

    return(
        <>
        <div className="counter">
        <button className="boton" onClick={() => qty>props.initial? SetQty(qty - 1):""}>-</button>
        <div className="number">{counterValue(qty,props.initial)}</div>
        <button className="boton"onClick={() => qty<props.stock? SetQty(qty + 1):""}>+</button></div>
        <button className="cardbutton" onClick={()=> props.handlerAdd(props.stock,qty)}>Agregar al carrito</button>
        </>
    )
}

export default CardCount