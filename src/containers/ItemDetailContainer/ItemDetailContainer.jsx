import {useEffect,useState} from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import ItemDetail from '../../components/ItemDetail';
const datos = [
    {id:1,
     descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam saepe ducimus fugit optio cumque ad unde, ex facere ea? Aspernatur consectetur harum, culpa nobis repellat numquam magnam, obcaecati minima doloribus alias suscipit ipsa eos quasi porro error, dolorem est ab nam voluptates vel! Harum fugit eveniet ipsa velit cumque quas!",
     nombre:"Prueba",
     precio:4,
     foto:"/images/logo192.png"},
     {id:2,
     descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam saepe ducimus fugit optio cumque ad unde, ex facere ea? Aspernatur consectetur harum, culpa nobis repellat numquam magnam, obcaecati minima doloribus alias suscipit ipsa eos quasi porro error, dolorem est ab nam voluptates vel! Harum fugit eveniet ipsa velit cumque quas!",
     nombre:"Prueba2",
     precio:4,
     foto:"/images/logo192.png"}
]

const ItemDetailContainer = () =>{
const [state, setstate] = useState([])
useEffect(() => {
    const data = new Promise((resolve, reject) => {
       setTimeout(() => {
           resolve(datos)
       }, 2000); 
    })
    data.then((resultado)=>{ 
        setstate(resultado[0])
        
    })
}, [])
    if (state.length==0) {
        return(
            <CircularProgress />)        }else {
        return(
        // <div className="row">
        //     <Item datos={state}/>
        // </div>
        <ItemDetail datos={state}/>
        )
    }}
export default ItemDetailContainer