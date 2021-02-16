import './style.css'
import {NavLink} from 'react-router-dom'

const Item = ({datos}) =>{
          return(  
            <div class="row">
          {datos.map((d)=>{
              return(
          <NavLink to={`/products/${d.id}`}><div class="col s12 m3 l3">
              <div class="card">
                <div class="card-image">
                  <img src={`/images/${d.image}`}/>
                  <br/><br/>
                  <a href=""><span class="card-title">{d.name}</span></a>
                </div>
                <div class="card-action">
                    <p className="precio">${d.price}</p>
                </div>
              </div>
            </div></NavLink>)

            })}</div>
        )
}

export default Item