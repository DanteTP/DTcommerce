import './style.css'
import React, { useState, useEffect } from 'react'
import Cart from '../../components/Cart'
import {useContext} from 'react'
import {CartContextp} from '../../context/cartContext'


const ItemCartContainer = ({greeting}) =>{
    const { product,onAdd,onSus,removeItem,clear,Gtotal}  = useContext(CartContextp)


    return (
        <div className='container'>
       <Cart product={product} removeItem={removeItem} Gtotal={Gtotal} clear={clear} onSus={onSus} greeting={greeting} onAdd={onAdd}/></div>
    )

}

export default ItemCartContainer