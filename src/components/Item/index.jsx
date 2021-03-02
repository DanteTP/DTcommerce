import './style.css'
import React, { useState,useContext } from 'react'
import {NavLink} from 'react-router-dom'
import CardCount from '../CardCount'
import {CartContextp} from '../../context/cartContext'




const Item = ({datos}) =>{
      const [hoover, sethoover] = useState('cardcontainer')
      const { product,setProduct,onAdd,totalac}  = useContext(CartContextp)
      // const [cart,SetCart] = useState(0)
      const [color, setcolor] = useState('whitesmoke')

      const handlerAdd= (producto,addvalue)=>{
        onAdd(producto,addvalue)
    }
      let filter = (value)=>{
          return (
          product.some((p)=>p.item.id==value))
      }
          return(  
            <div class="row">
          {datos.map((d)=>{
              return(
           <div className="col s12 m4 l3 cardbody" >  
              <div className='cardcontainer' >
                <NavLink to={`/products/${d.id}`}>
                <div className="imagecontainer">
                  <img className='image' src={`/images/${d.image}`}/>
                  <span id='prueba' className="cardtitle">{d.name}</span>
                </div>
                <div className="pricecontainer">
                    <p className="precio">${d.price}</p>
                </div></NavLink>
                <div><CardCount initial={1} handlerAdd={handlerAdd} stock={d.stock} prod={d} filter={filter}/></div>
              </div>
            </div>)

            })}</div>
        )
}

export default Item