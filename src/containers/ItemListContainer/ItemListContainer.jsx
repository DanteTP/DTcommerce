import './style.css'
import React, { useState, useEffect } from 'react'
import ItemCount from '../../components/ItemCount'
import { render } from '@testing-library/react'
import { ItemList } from './ItemList'

const ItemListContainer = (props) =>{
const [cart,SetCart] = useState(0)
const handlerAdd= (stock,addvalue)=>{
        if(addvalue<=(stock-cart)){SetCart(cart+addvalue)}else{alert("ingrese una cantidad menor ya que no tenemos suficiente stock")}}

// useEffect(() => {
    
//     return () => {
//         const promesa = async (resolver, rechazar) => {
//             setTimeout(() => {
//                 resolver('data')
//             }, 3000)
        
//         }
//         const data = await promesa((data) => {
//             return data
            
//         })
//     }
// },)


return (
    <>
    <h1>{props.greeting}</h1>
    <ItemList/>
    </>)
}

export default ItemListContainer