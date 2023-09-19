import {useState} from "react";
import styles from "./Nav.module.css"

export default function SearchBar({onSearch}) {
  const [id, setId] = useState("");

  function changeHandler(event) {
    setId(event.target.value);
  }

  return (
    <div>
      <input className={styles.input}
        type="search"
        onChange={changeHandler}
        value={id}
        placeholder="Search Character"
      />
      <button className={styles.button}
        onClick={() => {
          onSearch(id);
        }}
      >
        ADD
      </button>
    </div>
  );
}
