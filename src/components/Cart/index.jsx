import './style.css'
import { NavLink } from 'react-router-dom'
import {useContext} from 'react'
import {CartContextp} from '../../context/cartContext'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Cartcount from '../Cartcount';

const Cart = () => {
    const { product,setProduct,onAdd,onSus,removeItem,clear,Gtotal}  = useContext(CartContextp)

    let handlerAdd= (addvalue,datos)=>{
           return onAdd(datos,addvalue) 
    }
    
    let handlerSus= (susvalue)=>{
        return onSus(susvalue) 
 }
        return(<>
        {product.length==0?<h1>Carrito vacío</h1>:
        <><h1>Bienvenido a tu carrito de compras</h1>
        {product.map((p)=> <>       
        <div className='row cartcont'>
            <div className='col s12 l2 m2 cfoto'><img src={`/images/${p.item.image}`} alt=""/></div>
            <div className='col s12 l9 m9 ctitulo'>
            <div className='titulocart'><p>{p.item.name}</p>
            <p>${p.item.price}</p>
            </div>
            <div className='cartitemcontrol'>
                <div className='cqty'><Cartcount initial={p.quantity} handlerAdd ={handlerAdd} handlerSus={handlerSus} stock={50} prod={p.item}/></div>
                <button onClick={()=>removeItem(p.item)} className='idb'><HighlightOffIcon/></button>
               </div></div>
        </div><hr/></>)}</>}
        {product.length>0?<div className="row totalcont">
        <div className='col s12 l2 m2 s12 ctotal'><p className="carttotal">${Gtotal()}</p></div>
        <button className='col s4 l2 m2 s12 cboton'>FINALIZAR</button>
        <NavLink to='/' className='col s4 l2 m2 s12 cbotonc'><p>SEGUIR COMPRANDO</p></NavLink>
        <button onClick={()=>clear()} className='col s4 l2 m2 s12 cboton'>VACIAR CARRITO</button>
        </div>:<NavLink to='/'><div className="row cartcomprar">Comprar</div></NavLink>}
        </>)
    
}

export default Cart