import './style.css'


export default SearchBar => {
    return (
        <div>

  
<nav>
    <div className="nav-wrapper">
      <form>
        <div className="input-field">
          <input id="search" type="search"  placeholder="Buscar" required></input>
          <label className="label-icon" for="search" ><i className="material-icons"></i></label>
          <i className="material-icons">X</i>
        </div>
      </form>
    </div>
  </nav>
        </div>
    )
}
