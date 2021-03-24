import './style.css'
import React, { useState, useContext } from 'react'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {CartContextp} from '../../context/cartContext'
import { NavLink } from 'react-router-dom'

const ItemCount = (props) =>{
    const [qty,SetQty] = useState(1)
    const [visible, setvisible] = useState(false)
    const {onAdd}  = useContext(CartContextp)
    
    const add = (value1,value2) =>{
        onAdd(value1,value2)
        setvisible(true)
    }
    const counterValue = (qty,initial) =>{return initial>qty? initial:qty}
    
    return(
        // Filtra los counter ya que en las card si el producto esta en el carrito no se muestra contador
        props.screen==='detail'?<>
        <div className="counter">
        <button className="cartbutton" onClick={() => qty>props.initial? SetQty(qty - 1):""}><p className='pcardbutton'>-</p></button>
        <div className="number">{counterValue(qty,props.initial)}</div>
        <button className="cartbutton" onClick={() => qty<props.stock? SetQty(qty + 1):""}><p className='pcardbutton'>+</p></button></div>
        <div className="stock"><p className="pcount">Stock: {props.stock}</p></div>
        <button className="buttondetail" onClick={()=> add(props.prod,qty)}>Agregar al carrito</button>
        {visible?<><NavLink to='/cart'><button className="buttondetaild" >Comprar</button></NavLink><br/></>:null}
        </>:<>
        <div className="counter">
        {!props.filter(props.prod.id)?<><button className="cartbutton" onClick={() => qty>props.initial? SetQty(qty - 1):""}><p className='pcardbutton'>-</p></button>
        <div className="number">{counterValue(qty,props.initial)}</div>
        <button className="cartbutton"onClick={() => qty<props.stock? SetQty(qty + 1):""}><p className='pcardbutton'>+</p></button></>:null}</div>
        {!props.filter(props.prod.id)?<button className="cardbutton" onClick={()=> onAdd(props.prod,qty)}><AddShoppingCartIcon/></button>:<button className="cardbuttonadd"><ShoppingCartIcon/></button>}
        </>
    )
}

export default ItemCount