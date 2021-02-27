import './style.css'
import {NavLink} from 'react-router-dom'
import CardCount from '../CardCount'

const Item = ({datos}) =>{
          return(  
            <div class="row">
          {datos.map((d)=>{
              return(
          <NavLink to={`/products/${d.id}`}><div class="col s12 m4 l3 cardbody">
              <div class="card" >
                <div class="card-image">
                  <img src={`/images/${d.image}`}/>
                  <span class="card-title">{d.name}</span>
                </div>
                <div class="card-action">
                    <p className="precio">${d.price}</p>
                </div>
                <div><CardCount/></div>
              </div>
            </div></NavLink>)

            })}</div>
        )
}

export default Item