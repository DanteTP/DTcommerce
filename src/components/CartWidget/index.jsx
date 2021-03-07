import './style.css'
import { FaShoppingCart } from 'react-icons/fa';
import {CartContextp} from '../../context/cartContext'
import {useContext} from 'react'
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {NavLink} from 'react-router-dom'


const CartWidget = () => {
    console.log('cwidget');
    const {product,totalac}  = useContext(CartContextp)
    return(
    product.length==0?"":
    <NavLink to='/cart/'><Badge badgeContent={totalac(product)} color="primary"><ShoppingCartIcon style={{ fontSize: 50 , color: "#a37200" }}/></Badge></NavLink>)}

export default CartWidget