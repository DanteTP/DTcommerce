import logo from './logo.svg';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import NavBar from './containers/NavBar';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={"Bienvenidos a DTCOMMERCE!!"}/>
    </div>
  );
}

export default App;
