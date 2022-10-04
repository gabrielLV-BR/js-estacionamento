import styles from "./styles.module.scss";
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className={styles.header}>
      <Link to="/home" className={styles.logo}>Home</Link>
      <ul className={styles.options}>
        <li><Link to="/">Registrar</Link></li>
        <li><Link to="/">Histórico</Link></li>
        <li><Link to="/">Ajuda</Link></li>
      </ul>
    </header>
  );
}