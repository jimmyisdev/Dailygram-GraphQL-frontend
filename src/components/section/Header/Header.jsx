import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={`flex-row ${styles.header}`}>
      <h1>Dailygram Admin System</h1>
    </header>
  );
}
