import NavLinks from "./NavLinks";
import styles from "./NavBar.module.scss";

const Nav = () => {
    return (
        <nav className={styles.Nav}>
            <NavLinks />
        </nav>
    );
}

export default Nav;