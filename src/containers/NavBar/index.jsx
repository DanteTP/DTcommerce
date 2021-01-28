
import CartWidget from '../../components/CartWidget'
import SearchBar from '../../components/SearchBar'
import './style.css'


const NavBar = () => {
    return (
        <nav className="nav-extended"> 
        <div className="row" >
        <div className="logo col l2 s12 "><a href="">DTCOMMERCE</a></div>
        <div className="col l6 s12" >
          <div><SearchBar/></div>
          <div className="menu">
            <ul className="lista">
              <li><a className="listado" href="">Categorías</a></li>
              <li><a className="listado" href="">Login</a></li>
              <li><a className="listado" href="">Registrarte</a></li>
              <li><a className="listado" href=""><CartWidget/></a></li>
            </ul>
          </div>
        </div></div>
        </nav>
    )
}
export default NavBar 