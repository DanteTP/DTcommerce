import './style.css'
import { NavLink } from 'react-router-dom'
import ItemCount from '../ItemCount'
import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from '../../../node_modules/react-image-gallery';

const ItemDetail = ({datos}) => {
  console.log('itemdetail');
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
    return (
        <div>
        <div className="row">
            <div className="fotos col l8 m8 s12">
              <ImageGallery autoPlay={false} slideInterval={3000} showPlayButton={false} thumbnailPosition={'bottom'} height={55} items={images}/>
        </div>
        <div className="detalle col l4 m4 s12">
            <h1>{datos.name}</h1>
            <div className="price">${datos.price}</div>
            <br/><br/>
            <div className="contador"><ItemCount screen={'detail'} prod={datos} initial={1} stock={datos.stock}/></div><br/>
            <NavLink className="buttondetail" to='/cart'>Comprar</NavLink><br/>
            <button className="buttondetail">wish list</button>
        </div></div>
        <div className="row">
        <div className="descripcion col l8 m8 s12">{datos.description}</div></div>
        </div>
    )
}

export default ItemDetail