import Card from "./Card";
import styles from "./Cards.module.css"
import React from "react";

export default function Cards({characters, onClose}) {
  return (
    <div className={styles.cards}>
      {characters.map((character) => (
        <Card key={character.id} character={character} onClose={onClose} />
      ))}
    </div>
  );
}
