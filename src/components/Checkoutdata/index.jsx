import './style.css'
import {useState,useEffect} from 'react'
import {useContext} from 'react'
import {CheckOutContextp} from '../../context/CheckOutContext'
import {CartContextp} from '../../context/cartContext'
import firebase from 'firebase/app'
import '@firebase/firestore'
import {getFirestore} from '../../firebase'
import { NavLink } from 'react-router-dom'




const Checkoutdata = () =>{
    const {onAdd}  = useContext(CheckOutContextp)
    const {product,Gtotal,clear}  = useContext(CartContextp)
    const [nombre, setnombre] = useState('')
    const [apellido, setapellido] = useState('')
    const [phone, setphone] = useState('')
    const [email1, setemail1] = useState('')
    const [email2, setemail2] = useState('')
    const [direccion, setdireccion] = useState('')
    const [validation, setvalidation] = useState(false)
    const [button, setbutton] = useState(true)
    const [user, setuser] = useState()
    
const mailval=()=>{
    if(email1.length>5 && email1===email2 && email1.includes('@') && email1.includes('.com') ){
        setvalidation(false)
        setbutton(false)
        setuser({name:nombre,surname:apellido,email:email1,address:direccion,phone:phone})
    }else if(email1.length===0){
        setvalidation(false)
    }else{
        setvalidation(true)
    }
}

useEffect(() => {
    mailval()
    return () =>{
        setvalidation(true)
        setbutton(true)
    }
}, [email1,email2])



const preparerorder = () => {
    const db = getFirestore()
    const NEWorder = {
        buyer:user,
        items:[...product],
        date:firebase.firestore.Timestamp.fromDate(new Date()),
        total:Gtotal(product)}
    const ordenes = db.collection('Orders')
    ordenes.add(NEWorder).then((data)=>{
        alert(`Gracias ${nombre} ${apellido} por tu compra, tu número de orden es ${data.id}`);
        onAdd(data.id,NEWorder)
        clear()
    })
    
}


 return(
    <div className='row checkout'>
        <div className='col l6 m6 sm12 formdata'>
            <form action="">
                <label htmlFor="name">Nombre</label>
                <input type="text" id='name' className='inputcheckout' placeholder='ingresa tu nombre' onChange={(e)=>setnombre(e.target.value)}/>
                <label htmlFor="surname">Apellido</label>
                <input type="text" id="surname" placeholder='ingresa tu apellido' onChange={(e)=>setapellido(e.target.value)}/>
                <label htmlFor="">Teléfono</label>
                <input type="text" placeholder='ingresa tu apellido' onChange={(e)=>setphone(e.target.value)}/>
                <label htmlFor="">Dirección de entrega</label>
                <input type="text" placeholder='ingresa tu email' onChange={(e)=>setdireccion(e.target.value)}/>
                <label htmlFor="">Email</label>
                <input type="text" placeholder='repite tu email' onChange={(e)=>setemail1(e.target.value)}/>
                <label htmlFor="">Repite tu email</label>
                <input type="email" placeholder='ingresa tu dirección' onChange={(e)=>setemail2(e.target.value)}/>
                {validation?<p className='checkouterror'>Las direcciones de mail deben ser válidas y coincidir</p>:''}
            </form>
        </div>
        <div className='col l6 m6 sm12 salidabotones'>
        {button?'':<NavLink className='buttondetail' to="/checkout"onClick={()=>preparerorder()}>Finalizar compra</NavLink>}
        </div>
    </div>
 )
}

export default Checkoutdata

// date:firebase.firestore.Timestamp.fromDate(new Date()    )