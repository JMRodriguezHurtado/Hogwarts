import errorImg from "../assets/error-4044.jpg";
import styles from "./Error404.module.css";

function ErrorPage() {
  return (
    <div className={styles.container}>
      <div className={styles.errorMessage}>
        <h1 className={styles.errorCode}>404</h1>
        <p className={styles.errorDescription}>Pagina no encontrada</p>
      <img src={errorImg} alt="error404" />
    </div>
    </div>
  );
}

export default ErrorPage;
