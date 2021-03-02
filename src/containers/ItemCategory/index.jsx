import {useState} from 'react'
import {useEffect} from 'react'
import { useParams } from 'react-router-dom';
import datos from '../../data/products'
import Item from '../../components/Item'
import PageNotFound from '../../components/PageNotFound'
import CircularProgress from '@material-ui/core/CircularProgress';
import {getFirestore} from '../../firebase'


const ItemCategory = () =>{

const [cartas,setCartas] = useState([])
const [loading, setloading] = useState(true)
const {CategoryID} = useParams()

useEffect(() => {
    if(CategoryID=="Todos los productos"){
        const db = getFirestore()
        const products = db.collection('Productos')
        products.get().then((data)=>{
            let dato = data.docs.map(element=> element.data())
            setCartas(dato)
            setloading(false)
        })
    }else{
    const db = getFirestore()
    const products = db.collection('Productos')
    products.where("category", "==",CategoryID).get()
    .then((data)=>{
        let dato = data.docs.map(element=> element.data())
            setCartas(dato)
            setloading(false)
    })}
    setloading(true)
},[CategoryID])
        if (loading==true) {
        return(
          <CircularProgress/>)        }else {
        return(
        <div className="container">
        {cartas.length==0?<PageNotFound/>:<Item datos={cartas}/>}
        </div>    
        )
    }}
export default ItemCategory