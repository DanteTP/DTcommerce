import './style.css'
import ItemCount from '../ItemCount'
import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from '../../../node_modules/react-image-gallery';

const ItemDetail = ({datos}) => {
    const images = datos.image.map((photo)=>{
      return(
      {
        original: `/images/${photo}`,
        thumbnail: `/images/${photo}`,
      })})
      
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
            <button className="buttondetail">wish list</button>
        </div></div>
        <div className="row">
        <div className="descripcion col l8 m8 s12">{datos.description}</div></div>
        </div>
    )
}

export default ItemDetail