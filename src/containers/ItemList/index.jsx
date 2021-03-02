import React, { useState,useEffect } from 'react'
import Item from '../../components/Item'
import CircularProgress from '@material-ui/core/CircularProgress';
import datos from '../../data/products'
import {getFirestore} from '../../firebase'





 const ItemList = () => {

    const [home, setHome] = useState([])
    const [loading, setloading] = useState(true)

    useEffect(() => {
        const db = getFirestore()
        const products = db.collection('Productos')
        products.get().then((data)=>{
            let dato = data.docs.map(element=> element.data())
            setHome(dato)
            setloading(false)
        })
        setloading(true)
    }, [])
        if (loading) {
            return(
                <CircularProgress />)       }else {
            return(
            <div class="container">
            <Item datos={home}/></div>
            )
        }}
        
    
        export default ItemList

