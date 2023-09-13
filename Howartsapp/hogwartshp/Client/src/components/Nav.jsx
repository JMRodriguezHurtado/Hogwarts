import SearchBar from "./SearchBar";
import {Link} from "react-router-dom";
import styles from "./Nav.module.css"


function Nav({onSearch, randomize, onLogOut}) {
  return (
    <div>
      <div> 
        <Link to="/about">About</Link>
        <Link to="/home">     Home    </Link>
        <Link to="/favorites">     Favorites    </Link>
        <Link to="/"><button onClick={onLogOut}>Logout</button></Link>
      </div>

      <SearchBar onSearch={onSearch} />
      <button onClick={randomize}>ADD RANDOM</button>
    </div>
  );
}

export default Nav;
