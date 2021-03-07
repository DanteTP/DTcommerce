import './style.css'
import Badge from '@material-ui/core/Badge';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchBar from '../../components/SearchBar'
import BurgerMenu from '../../components/BurgerMenu';
import { NavLink } from 'react-router-dom'
import CartWidget from '../../components/CartWidget';



const NavBar = () => {
    console.log('nav');
    return (
        <div className="header row" >
        <div className="col m4 s12 l3 logo">
          <NavLink to='/'><img className="logop" src="/images/logoweb2.png" alt=""/></NavLink>
          <div className="burger"><BurgerMenu/></div>
          <div className="carts"><CartWidget/></div>
          </div>
        <div className="col m5 s12 l5 search" >
          <div className="busq"><SearchBar/></div>
        </div>
        <div className="col s12 mobile" ><BurgerMenu/></div>
        <div className="col m3 l4 s4 login" >
          <div className="cart"><ul className="cartlogin">
           <li ><Badge><AccountCircleIcon style={{ fontSize: 50 , color: "#a37200" }}/></Badge></li>
           <li><CartWidget/></li>
            </ul></div>
        </div>
        </div>
    )
}
export default NavBar 

