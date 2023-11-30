import NavBarTab from "../../elements/NavBar/NavBarTab";
import styles from "./NavBar.module.scss";

const NavLinks = (props) => {

    return (
        <ul>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}><NavBarTab label="A propos" link="/about" /></li>
            <li className={styles.contact} onClick={() => props.isMobile && props.closeMobileMenu()}><NavBarTab label="Contact" link="/nousContacter" /></li>
        </ul>
    );
};
export default NavLinks;
