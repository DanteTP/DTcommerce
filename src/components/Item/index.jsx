import './style.css'

const Item = ({datos}) =>{
          return(  
          datos.map((d)=>{
              return(
            <div class="col s12 m3 l2">
              <div class="card">
                <div class="card-image">
                  <img src={d.foto}/>
                  <br/><br/>
                  <a href=""><span class="card-title">{d.nombre}</span></a>
                </div>
                <div class="card-action">
                    <p>{d.precio}</p>
                </div>
              </div>
            </div>)

            }
            

        ))
}

export default Item