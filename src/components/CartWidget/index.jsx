import './style.css'
import {CartContextp} from '../../context/cartContext'
import {useContext,useState} from 'react'
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {NavLink} from 'react-router-dom'


const CartWidget = () => {
    const [color, setcolor] = useState("#a37200")
    const {product,totalac}  = useContext(CartContextp)
    return(
    <NavLink isActive={(match, location) => {
        if (!match) {
          return setcolor("#a37200");
        }else{
            setcolor('black') 
        } }}
        to='/cart/'><Badge badgeContent={totalac(product)} color="primary"><ShoppingCartIcon style={{ fontSize: 50 , color: color }}/></Badge></NavLink>)}

export default CartWidget