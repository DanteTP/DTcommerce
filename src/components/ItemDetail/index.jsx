import './style.css'
import ItemCount from '../ItemCount'



const ItemDetail = (datos) => {

    return (
        <div>
        <div className="row">
            <div class="fotos col l8 m7 s12">
            <img src={`/image/${datos.image}`}/>
        </div>
        <div class="detalle col l4 m5 s12">
            <h1>{datos.nombre}</h1>
            <div className="price">${datos.precio}</div>
            <br/><br/>
            <div className="contador"><ItemCount initial={1} stock={2}/></div>
            <p>stock(props)</p>
            <button>Agregar al carrito</button><br/>
            <button>comprar</button><br/>
            <button>wish list</button>
        </div></div>
        <div className="row">
        <div class="descripcion col l8 m8 s12">{datos.descripcion}</div></div>
        </div>
    )
}

export default ItemDetail