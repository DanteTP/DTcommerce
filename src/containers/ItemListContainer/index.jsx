import './style.css'
import React, { useState, useEffect } from 'react'
import ItemList  from '../ItemList'
import ItemDetailContainer from '../ItemDetailContainer'



const ItemListContainer = (props) =>{
      
        if (props.position=="home") {
            return(
            <div className="row">
            <h1>{props.greeting}</h1>
            <ItemList /></div>)}
            else if(props.position=="productos"){
                return(<div className="row">
                <h1>{props.greeting}</h1>
                <ItemDetailContainer/></div>)
            }
          

}

export default ItemListContainer