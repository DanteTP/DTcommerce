
import './style.css'

const ItemDetail = ({datos}) => {
    return (
        <div>
        <div className="row">
        <div class="fotos col l8 m8 s12">
            <img src={datos.foto}/>
        </div>
        <div class="detalle col l4 m4 s12">
            <h1>{datos.nombre}</h1>
            <div className="price">${datos.precio}</div>
            <br/><br/>
            <div>cantidad</div>
            <p>stock</p>
            <button>comprar</button><br/>
            <button>Agregar al carrito</button><br/>
            <button>wish list</button>
        </div></div>
        <div className="row">
        <div class="descripcion col l8 m8 s12">{datos.descripcion}</div></div>
        </div>
    )
}

export default ItemDetail