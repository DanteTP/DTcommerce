import './style.css'
import React, { useState,useContext } from 'react'
import { NavLink } from 'react-router-dom'
import ItemCount from '../ItemCount'
import {CartContextp} from '../../context/cartContext'
import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from '../../../node_modules/react-image-gallery';


const ItemDetail = ({datos}) => {

    const images = [
        {
          original: `/images/${datos.image}`,
          thumbnail: `/images/${datos.image}`,
        },
        {
          original: `/images/${datos.image}`,
          thumbnail: `/images/${datos.image}`,
        },
        {
          original: `/images/${datos.image}`,
          thumbnail: `/images/${datos.image}`,
        },
        {
          original: `/images/${datos.image}`,
          thumbnail: `/images/${datos.image}`,
        },
        {
          original: `/images/${datos.image}`,
          thumbnail: `/images/${datos.image}`,
        },
        {
          original: `/images/${datos.image}`,
          thumbnail: `/images/${datos.image}`,
        },
        {
          original: `/images/${datos.image}`,
          thumbnail: `/images/${datos.image}`,
        },
        {
          original: `/images/${datos.image}`,
          thumbnail: `/images/${datos.image}`,
        },
        {
          original: `/images/${datos.image}`,
          thumbnail: `/images/${datos.image}`,
        }
      ];
      

    const[cartB,SetCartB]= useState(false)
    const [cart,SetCart] = useState(0)
    const { product,setProduct,onAdd,totalac}  = useContext(CartContextp)

    const handlerAdd= (stock,addvalue)=>{
        if(addvalue<=(stock-cart)){SetCart(cart+addvalue) }else{return alert("ingrese una cantidad menor ya que no tenemos suficiente stock")}
        SetCartB(true);
        onAdd(datos,addvalue)
        
    }
    return (
        <div>
        <div className="row">
            <div class="fotos col l8 m8 s12">
                <ImageGallery autoPlay={false} slideInterval={3000} showPlayButton={false} thumbnailPosition={'bottom'} height={55} items={images}/>
        </div>
        <div class="detalle col l4 m4 s12">
            <h1>{datos.name}</h1>
            <div className="price">${datos.price}</div>
            <br/><br/>
            <div className="contador"><ItemCount cart={cart} handlerAdd ={handlerAdd} cartb={cartB} initial={1} stock={datos.stock}/></div><br/>

            {cartB==false? "" :<NavLink className="buttondetail" to='/cart'>Comprar</NavLink>}<br/>
            <button className="buttondetail">wish list</button>
        </div></div>
        <div className="row">
        <div class="descripcion col l8 m8 s12">{datos.description}</div></div>
        </div>
    )
}

export default ItemDetail