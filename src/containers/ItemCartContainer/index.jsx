import './style.css'
import Cart from '../../components/Cart'
import CartMenu from '../../components/CartMenu'
import Order from '../../components/Order'


const ItemCartContainer = (cart) =>{
    return (
        <div className='container'>
       {cart?<><Cart/>
       <CartMenu/></>:<Order/>}
       </div>
    )

}

export default ItemCartContainer