import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import datos from '../../data/products'
import ItemDetail from '../../components/ItemDetail'
import PageNotFound from '../../components/PageNotFound';
import CircularProgress from '@material-ui/core/CircularProgress';
import {getFirestore} from '../../firebase'


const ItemDetailContainer = () =>{
const [dato,setDato] = useState({})
const {ProductID} = useParams()
const [loading, setloading] = useState(true)
const [filterprod, setfilterprod] = useState({})

useEffect(() => {
    const db = getFirestore()
    const products = db.collection('Productos')
    products.where("id", "==",ProductID).get()
    .then((data)=>{
        let dato = data.docs.map(element=> element.data())
            setDato(dato[0])
            setloading(false)
    })
    setloading(true)
}, [ProductID])
    if (loading==true) {
        return(
          <CircularProgress/>)        }else {
        return(
        <div className="container">
        {dato==undefined?<PageNotFound/>:<ItemDetail datos={dato}/>}
        </div>    
        )}
    }
export default ItemDetailContainer