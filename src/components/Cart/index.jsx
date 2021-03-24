import './style.css'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Cartcount from '../Cartcount';
import {CartContextp} from '../../context/cartContext'
import {useContext} from 'react'
import { NavLink } from 'react-router-dom'


const Cart = () => {
       const {product,removeItem,Gtotal}  = useContext(CartContextp)

        return(<>
        {product.length===0?<><h1>Carrito vacío</h1><NavLink to='/'><div className="row cartcomprar">Comprar</div></NavLink></>:
        <><h1>Bienvenido a tu carrito de compras</h1>
        {product.map((p,i)=> <>       
        <div className='row cartcont' key={i}>
            <div className='col s12 l2 m2 cfoto'><img src={`/images/${p.item.image[0]}`} alt=""/></div>
            <div className='col s12 l9 m9 ctitulo'>
            <div className='titulocart'><p>{p.item.name}</p>
            <p>${p.item.price}</p>
            </div>
            <div className='cartitemcontrol'>
                <div className='cqty'><Cartcount initial={p.quantity} stock={p.item.stock} prod={p.item}/></div>
                <button onClick={()=>removeItem(p.item)} className='idb'><HighlightOffIcon/></button>
            </div></div>
        </div><hr/></>)}
        <div className='col s12 l2 m2 s12 ctotal'><p className="carttotal">TOTAL ${Gtotal()}</p></div>
        </>
        }</>)
    
}

export default Cart