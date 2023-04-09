import Link from "next/link"
import styles from "../styles/Navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <a className={styles.logo}><img src="/images/logo.png" alt="Bingo Fit" /></a>
      <div className={styles.links}>
        
        <Link className={styles.login} href="/login">Login</Link>
        <Link href="/register">Register</Link>
      </div>
    </div>
    )
};

export default Navbar;