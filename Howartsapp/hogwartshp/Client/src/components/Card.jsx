import {useNavigate} from "react-router-dom";
import {connect} from "react-redux";
import {addFavorite, removeFavorite} from "../redux/actions/actions";
import {useState, useEffect} from "react";
import styles from "./Card.module.css"

function Card(props) {
  const navigate = useNavigate();
  const {character, onClose, favorites, addFavorite, removeFavorite} = props;
  const [isFav, setFav] = useState(false);
  const [closeBtn, setCloseBtn] = useState(true);

  function navigateHandler() {
    navigate(`/detail/${character.id}`);
  }

  useEffect(() => {
    if(!onClose) {
      setCloseBtn(false);
    }
  }, []);

  useEffect(() => {
    //[rick, morty, mr poppybutthole]
    favorites.forEach((fav) => {
      if (fav.id === character.id) {
        setFav(true);
      }
    });
  }, [favorites]);

  function handleFavorite(character) {
    if (!isFav) {
      addFavorite(character); //{}
      setFav(true);
    } else {
      removeFavorite(character); //id
      setFav(false);
    }
  }

  return (
  <div className={styles.card}>
    <div>
      {closeBtn && (<button className={styles.closeBtn} onClick={() => {
        onClose(character.id);
      }}
      >X</button>)}

      <h2 className={styles.h2}>Name:{character.name}</h2>
      {isFav ? (
        <button className={styles.favoriteBtn}
          onClick={() => {
            handleFavorite(character.id);
          }}
        >
          ❤️
        </button>
      ) : (
        <button className={styles.favoriteBtn}
          onClick={() => {
            handleFavorite(character);
          }}
        >
          🤍
        </button>
      )}
      <p className={styles.ptext}>Species: {character.species}</p>
      <p className={styles.ptext}>Gender: {character.gender}</p>
      <img src={character.image} alt={name} onClick={navigateHandler} />
    </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (character) => dispatch(addFavorite(character)),
    removeFavorite: (id) => dispatch(removeFavorite(id)),
  };
};

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
