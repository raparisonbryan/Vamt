import NavBarTab from "../../elements/NavBar/NavBarTab";

const NavLinks = () => {
    return (
        <ul>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}><NavBarTab label="Nos véhicules" link="/vehicles" /></li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}><NavBarTab label="Contact" link="/contact" /></li>
        </ul>
    );
};
export default NavLinks;
