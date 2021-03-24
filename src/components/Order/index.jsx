import './style.css'
import {useContext} from 'react'
import {CheckOutContextp} from '../../context/CheckOutContext'


const Order = () => {
    const {coproduct}  = useContext(CheckOutContextp)

        return(<>
       <h1>Pedido exitoso!!</h1>
         <div className="datacontainer">
        <h3><strong>Número de pedido: </strong>{coproduct.order_number}</h3>
        <h3><strong>Comprador: </strong>{`${coproduct.orderdata.buyer.name} ${coproduct.orderdata.buyer.surname}`}</h3>
        <h3><strong>Dirección de correo registrada: </strong>{coproduct.orderdata.buyer.email}</h3>
        <h3><strong>Dirección de envío: </strong>{coproduct.orderdata.buyer.address}</h3>
        <h3><strong>Teléfono de contacto: </strong>{coproduct.orderdata.buyer.email}</h3>
        </div><br/><br/>
        <h2>Detalle del pedido</h2>
        {coproduct.orderdata.items.map((p)=> <>       
        <div className='row cartcont'>
            <div className='col s12 l2 m2 cfoto'><img src={`/images/${p.item.image[0]}`} alt=""/></div>
            <div className='col s12 l9 m9 ctitulo'>
            <div className='titulocart'><p>{p.item.name}</p>
            <p>${p.item.price}</p>
            </div>
        </div>
        </div><hr/></>)}
        <div className='col s12 l2 m2 s12 ctotal'><p className="carttotal">TOTAL ${coproduct.orderdata.total}</p></div>
        </>)
}

export default Order