import './style.css'
import {useContext,useState,useEffect} from 'react'
import {CartContextp} from '../../context/cartContext'
import { NavLink } from 'react-router-dom'
import Checkoutdata from '../Checkoutdata'



const CartMenu = () =>{
    const {product,clear}  = useContext(CartContextp)
    const [order, setorder] = useState(false)
    const [menu, setmenu] = useState(false)
    

    useEffect(() => {
        if(product.length>0){setmenu(true)}
        return () => {
            setmenu(false)
        }
    }, [product])

    return(<>
        {menu?<>{!order?<div className="row totalcont">
        <button className='col s4 l2 m2 s12 cboton' onClick={()=>setorder(true)}>FINALIZAR</button>
        <NavLink to='/' className='col s4 l2 m2 s12 cbotonc'><p>SEGUIR COMPRANDO</p></NavLink>
        <button onClick={()=>clear()} className='col s4 l2 m2 s12 cboton'>VACIAR CARRITO</button>
        </div>:<Checkoutdata/>}</>:null}</>
    )
}

export default CartMenu