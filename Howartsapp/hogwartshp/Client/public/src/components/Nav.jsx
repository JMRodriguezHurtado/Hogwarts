import SearchBar from "./SearchBar";
import {Link} from "react-router-dom";


function Nav({onSearch, randomize, onLogOut}) {
  return (
    <div>
      <div>
        <Link to="/about">About</Link>
        <Link to="/home">Home</Link>
        <Link to="/favorites">Favorites</Link>
        <button onClick={onLogOut}>Logout</button>
      </div>

      <SearchBar onSearch={onSearch} />
      <button onClick={randomize}>ADD RANDOM</button>
    </div>
  );
}

export default Nav;
