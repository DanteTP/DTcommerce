import './style.css'


export default SearchBar => {
    return (
        <div>

  
<nav>
    <div class="nav-wrapper">
      <form>
        <div class="input-field">
          <input id="search" type="search" style={{height:"7vh"}} required></input>
          <label class="label-icon" for="search"><i class="material-icons">search</i></label>
          <i class="material-icons">close</i>
        </div>
      </form>
    </div>
  </nav>
        </div>
    )
}
