import React, {useState,useEffect } from 'react'
import Item from '../../components/Item'
// import CircularProgress from '@material-ui/core/CircularProgress';
import {useContext} from 'react'
import {ProdContext} from '../../context/productContext'
import {CartContextp} from '../../context/cartContext'




 const ItemList = () => {
    const {productos}  = useContext(ProdContext)
    const { product,onAdd}  = useContext(CartContextp)
            return(
            <div className="container">
            <Item datos={productos} onAdd={onAdd} product={product}/></div>
            )
        }
        
    
        export default ItemList

