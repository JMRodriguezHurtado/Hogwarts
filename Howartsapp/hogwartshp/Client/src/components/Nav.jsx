import SearchBar from "./SearchBar";
import {Link} from "react-router-dom";
import styles from "./Nav.module.css"


function Nav({onSearch, randomize, onLogOut}) {
  return (
    <nav className={styles.nav}>
    <div>
      <div className={styles.logoColor}> 
        <Link to="/about">About</Link>
        <Link to="/home">     Home    </Link>
        <Link to="/favorites">     Favorites    </Link>
        <Link className={styles.logoColor} to="/"><button onClick={onLogOut}>Logout</button></Link>
      </div>

      <SearchBar onSearch={onSearch} />
      <button onClick={randomize}>RANDOM</button>
    </div>
    </nav>
  );
}

export default Nav;
