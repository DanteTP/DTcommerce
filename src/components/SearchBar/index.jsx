import './style.css'


export default SearchBar => {
    return (
        <div>

  <nav>
    <div className="nav-wrapper">
      <form>
        <div className="input-field">
          <input id="search" type="search" required></input>
          <label className="label-icon" for="search"><i className="material-icons">Buscar</i></label>
          <i className="material-icons">close</i>
        </div>
      </form>
    </div>
  </nav>
        </div>
    )
}
