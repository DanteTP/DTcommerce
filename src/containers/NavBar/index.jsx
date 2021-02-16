import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchBar from '../../components/SearchBar'
import './style.css'
import BurgerMenu from '../../components/BurgerMenu';
import {useState} from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
  const [state, setstate] = useState('false')

    return (

        <div className="header row" >
        <div className="col m3 s12 l2 logo">
          <Link to='/'><img className="logop" src="/images/logoweb2.png" alt=""/></Link>
          <div className="burger"><BurgerMenu/></div>
          <div className="carts"><Link to='/cart/'><Badge badgeContent={0} color="primary"><ShoppingCartIcon style={{ fontSize: 40 , color: "#a37200" }}/></Badge></Link></div>
          </div>
        <div className="col m5 s12 l6 search" >
          <div className="busq"><SearchBar/></div>
        </div>
        <div className="col s12 mobile" ><BurgerMenu/></div>
        <div className="col m4 l4 s4 login" >
          <div className="cart"><ul className="cartlogin">
            <li><Badge><AccountCircleIcon style={{ fontSize: 50 , color: "#a37200" }}/></Badge></li>
            <li><Link to='/cart/'><Badge badgeContent={4} color="primary"><ShoppingCartIcon style={{ fontSize: 50 , color: "#a37200" }}/></Badge></Link></li>
            </ul></div>
        </div>
        </div>
    )
}
export default NavBar 