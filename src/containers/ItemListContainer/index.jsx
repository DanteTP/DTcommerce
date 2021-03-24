import './style.css'
import ItemList  from '../ItemList'
import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from '../../../node_modules/react-image-gallery';


const ItemListContainer = () =>{
    const banner = [        {
        original: `/images/banner-mercadopago.jpg`,
      },
      {
        original: `/images/banner-mercadopago.jpg`,
      }]  


            return(
            <>
            <div className='col l12 m12 banner'><ImageGallery showFullscreenButton={false} disableThumbnailScroll={true} showThumbnails={false} autoPlay={true} slideInterval={3000} showPlayButton={false} thumbnailPosition={'top'} height={40} items={banner}/></div>
            <div className='container'>
            <div className="row">
            <h1>Ofertas!</h1>
            <ItemList /></div></div></>)
}

export default ItemListContainer