import './style.css'
import {NavLink} from 'react-router-dom'
import ItemCount from '../ItemCount'


const Item = ({datos, product,onAdd}) =>{
  console.log('item');
      const handlerAdd= (producto,addvalue)=>{
        onAdd(producto,addvalue)
    }
      let filter = (value)=>{
          return (
          product.some((p)=>p.item.id===value))
      } 
          return(  
            <div className="row">
          {datos.map((d)=>{
              return(
           <div key={d.id} className="col s12 m4 l3 cardbody" >  
              <div className='cardcontainer' >
                <NavLink to={`/products/${d.id}`}>
                <div className="imagecontainer">
                  <img className='image' src={`/images/${d.image}`} alt={`${d.name}`}/>
                  <span className="cardtitle">{d.name}</span>
                </div>
                <div className="pricecontainer">
                    <p className="precio">${d.price}</p>
                </div></NavLink>
                <div><ItemCount screen={''} initial={1} handlerAdd={handlerAdd} stock={d.stock} prod={d} filter={filter}/></div>
              </div>
            </div>)

            })}</div>
        )
}

export default Item