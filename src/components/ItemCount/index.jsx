import './style.css'
import React, { useState } from 'react'


const ItemCount = (props) =>{
    const [qty,SetQty] = useState(0)


    const counterValue = (qty,initial) =>{return initial>qty? initial:qty}




    return(
        <div>
         <div class="row">
        <div class="col l3">
        <a class="btn-floating btn-large waves-effect waves-light red" onClick={() => qty>props.initial? SetQty(qty - 1):""}><i class="material-icons">-</i></a>
        <h1>{counterValue(qty,props.initial)}</h1>
        <a class="btn-floating btn-large waves-effect waves-light red" onClick={() => qty<props.stock? SetQty(qty + 1):""}><i class="material-icons">+</i></a>
        </div></div>
        <div class="row">
        <div class="col l3">
        <a class="waves-effect waves-light btn" onClick={()=>{props.handlerAdd(props.stock,qty)}} >Agregar</a></div>
        </div>
        <h2>El carrito cuenta con {props.cart} items agregados y el stock total es de {props.stock} productos.</h2>
        
        </div>)
}

export default ItemCount