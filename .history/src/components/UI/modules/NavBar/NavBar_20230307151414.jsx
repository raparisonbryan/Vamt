import NavBarTab from "../../elements/NavBar/NavBarTab";
import styles from "./NavBar.module.scss";


export default function NavBar() {
    return (
        <>
            <p>Bonjour</p>
            <NavBarTab label="Home" link="/about" />
        </>
    )
}