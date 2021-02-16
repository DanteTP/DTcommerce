import React, { useState,useEffect } from 'react'
import Item from '../../components/Item'
import CircularProgress from '@material-ui/core/CircularProgress';
import datos from '../../data/products'





 const ItemList = () => {

    const [home, setHome] = useState([])

    useEffect(() => {
        const data = new Promise((resolve, reject) => {
            
            setTimeout(() => {
    
               resolve(datos)
         
            }, 2000); 
        })
        data.then((resultado)=>{ 
            // console.log(resultado);
            setHome(resultado)
            
            // console.log(resultado.filtrado);
            
            
        }
        )
    }, [])
        if (home.length==0) {
            return(
                <CircularProgress />)       }else {
            return(
            // <div className="row">
            //     <Item datos={state}/>
            // </div>
            <div class="container">
            <Item datos={home}/></div>
            )
        }}
        
    
        export default ItemList

