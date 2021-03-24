import './style.css'
import {useState} from 'react'
import {useContext} from 'react'
import {CartContextp} from '../../context/cartContext'


const Cartcount = (props) =>{
    const {onAdd,onSus}  = useContext(CartContextp)

    const [qty,SetQty] = useState(1)


    let sum = (qtyi,producto) =>{
        SetQty(qtyi+1)
        onAdd(producto,1)
    }

    let rest = (qti,producto) => {
        SetQty(qti-1)
        onSus(producto)
    }

    const counterValue = (qty,initial) =>{return initial>qty? initial:qty}


    return (
        <>
        <div className="counter">
        <button className='cartbutton' onClick={() => props.initial>1? rest(qty,props.prod):""}><p className='pcardbutton'>-</p></button>
        <div className="number">{counterValue(qty,props.initial)}</div>
        <button className='cartbutton' onClick={() => qty<props.stock? sum(qty,props.prod):""}><p className='pcardbutton'>+</p></button></div>
        </>
    )


}

export default Cartcount