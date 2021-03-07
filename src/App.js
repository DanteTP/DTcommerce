import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import NavBar from './containers/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemCategory from './containers/ItemCategory';
import ItemCartContainer from './containers/ItemCartContainer';
import CartContextp from './context/cartContext';
import PageNotFound from './components/PageNotFound'
import ProdContext from './context/productContext'

function App() {
  return ( 
    <div className="App">
      <ProdContext>
      <BrowserRouter>
      <CartContextp>
      <NavBar/>
      <Switch>
          <Route exact path='/'>
          <ItemListContainer greeting={"Bienvenidos a DTCOMMERCE!!"} position="home"/></Route> 
          <Route path='/products/:ProductID'>
         <ItemDetailContainer/></Route> 
         {/* <Route path='/category/:CategoryID'>
         <ItemCategory /> */}
         {/* </Route>  */}
         <Route path='/cart'>
         <ItemCartContainer/>
         </Route> 
         {/* <Route path='/cart/order'>
         <ItemCartContainer greeting={'salida'}/>
         </Route>  */}
         <Route component={PageNotFound}/>
         
        </Switch></CartContextp>
      </BrowserRouter></ProdContext>
      </div>
      );
  
}

export default App;
