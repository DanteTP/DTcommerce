import './style.css'
import ItemCount from '../ItemCount'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {useContext} from 'react'
import {CartContextp} from '../../context/cartContext'



const ItemDetail = ({datos}) => {

    const[cartB,SetCartB]= useState(false)
    const [cart,SetCart] = useState(0)
    const { product,setProduct,onAdd,totalac}  = useContext(CartContextp)

    const handlerAdd= (stock,addvalue)=>{
        if(addvalue<=(stock-cart)){SetCart(cart+addvalue) }else{return alert("ingrese una cantidad menor ya que no tenemos suficiente stock")}
        SetCartB(true);
        onAdd(datos,addvalue)
        
    }
    console.log(product);
    return (
        <div>
        <div className="row">
            <div class="fotos col l8 m7 s12">
            <img src={`/images/${datos.image}`}/>
        </div>
        <div class="detalle col l4 m5 s12">
            <h1>{datos.name}</h1>
            <div className="price">${datos.price}</div>
            <br/><br/>
            <div className="contador"><ItemCount cart={cart} handlerAdd ={handlerAdd} cartb={cartB} initial={1} stock={6}/></div><br/>

            {cartB==false? "" :<NavLink className="buttondetail" to='/cart'>Terminar mi compra</NavLink>}<br/>
            <button className="buttondetail">wish list</button>
        </div></div>
        <div className="row">
        <div class="descripcion col l8 m8 s12">{datos.description}</div></div>
        </div>
    )
}

export default ItemDetail