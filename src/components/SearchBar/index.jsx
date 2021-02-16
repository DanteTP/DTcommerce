import './style.css'


export default SearchBar => {
    return (
        <div>

  
<nav>
    <div class="nav-wrapper">
      <form>
        <div class="input-field">
          <input id="search" type="search"  placeholder="Buscar" required></input>
          <label class="label-icon" for="search" ><i class="material-icons"></i></label>
          <i class="material-icons">X</i>
        </div>
      </form>
    </div>
  </nav>
        </div>
    )
}
