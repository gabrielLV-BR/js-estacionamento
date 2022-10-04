
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

export function NotFound() {
    return (
        <main className={styles.main}>
            <h1>Página não encontrada</h1>
            <p>Tem certeza de que não se perdeu?</p>
            <Link to="/">Voltar para início</Link>
        </main>
    );
}