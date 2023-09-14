import {useState, useEffect} from "react";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import axios from "axios";

import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
import Detail from "./views/Detail.jsx";
import ErrorPage from "./views/ErrorPage.jsx";
import Login from "./views/Login.jsx";
import Favorites from "./views/Favorites.jsx";
import About from "./views/About.jsx";
import RickandMortyclip from "./assets/videos/RickandMortyclip.mp4"
import styles from "./App.css";

function App() {
  const location = useLocation();
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();

  const [access, setAccess] = useState(true);
  
  function logOut() {
    navigate("/");
    logoutHandler();
  }
  async function loginHandler(userData) {
    try {
      const {email, password} = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";
      const {data} = await axios(URL + `?email=${email}&password=${password}`);
      const {access} = data; //true / false
      setAccess(access);
      access && navigate("/home");
    } catch (error) {
      alert(error);
    }
  }

  function logoutHandler() {
    setAccess(false);
  }

  useEffect(() => {
    !access && navigate("/");
    //eslint-disable-next-line
  }, [access]);


  async function searchHandler(id) {
    try {
      const {data} = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );

      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        throw new Error("¡No hay personajes con este ID!");
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  }

  function closeHandler(id) {
    // nos llega un string
    let filteredCharacters = characters.filter(
      (character) => character.id !== Number(id)
    );

    setCharacters(filteredCharacters);
  }

  function randomHandler() {
    let memoria = [];

    let randomId = (Math.random() * 826).toFixed();

    randomId = Number(randomId);

    if (!memoria.includes(randomId)) {
      memoria.push(randomId);
      searchHandler(randomId);
    } else {
      alert("Ese personaje ya fue agregado");
      return;
    }
  }

  return (
    <div className=".App">
      {/* {location.pathname === "/" ? null : (
        <Nav onSearch={searchHandler} randomize={randomHandler} />
      )} */}

      {location.pathname !== "/" && (
        <Nav
          onSearch={searchHandler}
          randomize={randomHandler}
          logout={logOut}
        />
      )}

      <Routes>
        <Route path="/" element={<Login login={loginHandler} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={closeHandler} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <video className={styles.video} src={RickandMortyclip} autoPlay loop muted/>
    </div>
  );
}

export default App;
