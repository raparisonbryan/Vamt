import NavLinks from "./NavLinks";
import styles from "./NavBar.module.scss";
import {CgMenuRound} from "react-icons/cg";
import { CgCloseO } from "react-icons/cg";
import { useState } from "react";

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const hamburgerIcon = <CgMenuRound className={styles.hamburger} 
                            size='40px' 
                            color='white'
                            onClick={() => setIsOpen(!isOpen)}/>

    const closeIcon = <CgCloseO className={styles.hamburger} 
                            size='40px' 
                            color='white'
                            onClick={() => setIsOpen(!isOpen)}/>

    const closeMobileMenu = () => setIsOpen(false);

    return (
        <nav className={styles.MobileNav}>
            {isOpen ? closeIcon : hamburgerIcon}
            {isOpen && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
        </nav>
    );
}

export default MobileNav;