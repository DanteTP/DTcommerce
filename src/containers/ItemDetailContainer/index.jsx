import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail'
import PageNotFound from '../../components/PageNotFound';
import CircularProgress from '@material-ui/core/CircularProgress';
import {ProdContext} from '../../context/productContext'
import {useContext} from 'react'


const ItemDetailContainer = () =>{
const [dato,setDato] = useState()
const {ProductID} = useParams()
const [loading, setloading] = useState(true)
const {productos}  = useContext(ProdContext)

useEffect(() => {
    const data = new Promise((resolve,reject)=>{
        if(productos.length===0){
            setloading(true)
        }else{
        let filtered = productos.find((element)=>element.id===ProductID)
        resolve(filtered)}
    })
    data.then(result=>{
        setDato(result)
        setloading(false)
    })
    return () => {
        if(productos.lentgh===0){setloading(true)}
    }
}, [ProductID,productos])

    if(loading) {
        return(
          <CircularProgress/>)}else {
        return(
        <div className="container">{dato===undefined?<PageNotFound/>:<ItemDetail datos={dato}/>}</div>
        )}
    }
export default ItemDetailContainer