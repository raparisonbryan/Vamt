import NavBarTab from "../../elements/NavBar/NavBarTab";

const NavLinks = (props) => {

    return (
        <ul>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}><NavBarTab label="Nos vehicules" link="/vehicles" /></li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}><NavBarTab label="Contact" link="/contact" /></li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}><NavBarTab label="A propos" link="/about" /></li>
        </ul>
    );
};
export default NavLinks;
