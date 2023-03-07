import styles from "./NavBar.module.scss";
import NavBarTab from '../elements/NavBarTab/NavBarTab';

export default function NavBar() {
    return (
        <>
        
            <div className={styles.container}>

                <div className={styles.rightNav}>

                    <NavBarTab label="Methods" link="/methods" />
                    <NavBarTab label="Self-study" link="/self-study" />
                    <NavBarTab label="Examples" link="/examples" />
                    <NavBarTab label="Bibliography" link="/bibliography" />

                </div>

            </div>

        </>
    )
}