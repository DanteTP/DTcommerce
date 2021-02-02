import './style.css'
import React, { useState } from 'react'
import ItemCount from '../../components/ItemCount'



const ItemListContainer = (props) =>{

    const [cart,SetCart] = useState(0)

    const handlerAdd= (stock,addvalue)=>{
        if(addvalue<=(stock-cart)){SetCart(cart+addvalue)}else{alert("ingrese una cantidad menor ya que no tenemos suficiente stock")}}

    return (
        <>
        <h1>{props.mensaje}</h1>
        <ItemCount stock={6} initial={1} handlerAdd={handlerAdd} cart={cart}/>
        </>
    )
}

export default ItemListContainer