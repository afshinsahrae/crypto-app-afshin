import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Crypto App</h1>
        <p>
          <a href="/">Afshin Sahrae</a> | React.js Project
        </p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed By Afshin With ❤️</p>
      </footer>
    </>
  );
}

export default Layout;
