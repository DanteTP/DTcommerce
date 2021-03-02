import logo from './logo.svg';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import NavBar from './containers/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import {BrowserRouter, Route, Switch, useParams} from 'react-router-dom'
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemCategory from './containers/ItemCategory';
import ItemCartContainer from './containers/ItemCartContainer';
import CartContextp from './context/cartContext';
import PageNotFound from './components/PageNotFound'

function App() {
  return ( 
    <div className="App">
      
      <CartContextp>
      <BrowserRouter>
      <NavBar/>
      <div className="container">
      <Switch>
          <Route exact path='/'>
          <ItemListContainer greeting={"Bienvenidos a DTCOMMERCE!!"} position="home"/></Route> 
          <Route path='/products/:ProductID'>
         <ItemDetailContainer/></Route> 
         <Route path='/category/:CategoryID'>
         <ItemCategory />
         </Route> 
         <Route path='/cart'>
         <ItemCartContainer/>
         </Route> 
         <Route component={PageNotFound}/>
        </Switch>
        </div>
      </BrowserRouter></CartContextp>
      </div>
      );
  
}

export default App;
