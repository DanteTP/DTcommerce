import {useState} from 'react'
import {useEffect} from 'react'
import { useParams } from 'react-router-dom';
import datos from '../../data/products'
import Item from '../../components/Item'

const ItemCategory = () =>{

const [cartas,setCartas] = useState([])

const {CategoryID} = useParams()

useEffect(() => {
    const data = new Promise((resolve, reject) => {
        
        setTimeout(() => {
            let filtrado = datos.filter((v)=>{
            return  v.category == CategoryID})

           resolve(filtrado)
     
        }, 2000); 
    })
    data.then((resultado)=>{ 
        // console.log(resultado);
        setCartas(resultado)
        
        // console.log(resultado.filtrado);
        
        
    }
    )
}, [CategoryID])
    // if (state.length==0) {
        // return(
        //     <CircularProgress />)        }else {
        return(
        <div className="container">
        <Item datos={cartas}/>

        </div>    
        )
    }
export default ItemCategory