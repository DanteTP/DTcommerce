import {useState} from 'react'
import {useEffect} from 'react'
import { useParams } from 'react-router-dom';
import datos from '../../data/products'
import ItemDetail from '../../components/ItemDetail'

const ItemDetailContainer = () =>{
const [dato,setDato] = useState({})
const {ProductID} = useParams()
        

useEffect(() => {
    const data = new Promise((resolve, reject) => {
        
        setTimeout(() => {
            let filtrado = datos.find((v)=>{
            return  v.id == ProductID})

           resolve(filtrado)
        }, 2000); 
    })
    data.then((resultado)=>{ 
        // console.log(resultado);
        setDato(resultado)
        
    }
    )
}, [ProductID])
    // if (state.length==0) {
        // return(
        //     <CircularProgress />)        }else {
        return(
        <div className="container">
        <ItemDetail datos={dato}/>
        </div>    
        )
    }
export default ItemDetailContainer