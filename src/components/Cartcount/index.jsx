import './style.css'
import {useState} from 'react'

const Cartcount = (props) =>{

    const [qty,SetQty] = useState(1)


    let sum = (qtyi,producto) =>{
        SetQty(qtyi+1)
        {props.handlerAdd(1,producto)}
    }

    let rest = (qti,producto) => {
        SetQty(qti-1)
        {props.handlerSus(producto)}
    }

    const counterValue = (qty,initial) =>{return initial>qty? initial:qty}


    return (
        <>
        <div className="counter">
        <button className="boton" onClick={() => props.initial>1? rest(qty,props.prod):""}>-</button>
        <div className="number">{counterValue(qty,props.initial)}</div>
        <button className="boton"onClick={() => qty<props.stock? sum(qty,props.prod):""}>+</button></div>
        {/* <button className="cardbutton" onClick={()=> props.handlerAdd(props.stock,qty)}>Agregar al carrito</button> */}
        </>
    )


}

export default Cartcount