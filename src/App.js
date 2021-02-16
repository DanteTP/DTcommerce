import logo from './logo.svg';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import NavBar from './containers/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import {BrowserRouter, Route, Switch, useParams} from 'react-router-dom'
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemCategory from './containers/ItemCategory';


function App() {
  return (
    <div className="App">
      
      
      <BrowserRouter>
      <NavBar/>
      <div className="container">
      <Switch>
          <Route exact path='/'>
          <ItemListContainer greeting={"Bienvenidos a DTCOMMERCE!!"} position="home"/></Route> 
          <Route path='/products/:ProductID' >
         <ItemDetailContainer/></Route> 
         <Route path='/category/:CategoryID'>
         <ItemCategory />
         </Route> 
        </Switch>
        </div>
      </BrowserRouter>
      </div>
      );
  
}

export default App;
