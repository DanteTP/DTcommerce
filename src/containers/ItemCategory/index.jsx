import {useState,useContext} from 'react'
import {useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Item from '../../components/Item'
import PageNotFound from '../../components/PageNotFound'
import CircularProgress from '@material-ui/core/CircularProgress';
import {getFirestore} from '../../firebase'
import {CartContextp} from '../../context/cartContext'


const ItemCategory = () =>{
const { product,onAdd}  = useContext(CartContextp)

const [cartas,setCartas] = useState([])
const [loading, setloading] = useState(true)
const {CategoryID} = useParams()

useEffect(() => {
    if(CategoryID==="Todos los productos"){
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
        if (loading===true) {
        return(
          <CircularProgress/>)}else {
        return(
        <div className="container">
        {cartas.length===0?<PageNotFound/>:<Item datos={cartas} product={product} onAdd={onAdd}/>}
        </div>    
        )
    }}
export default ItemCategory