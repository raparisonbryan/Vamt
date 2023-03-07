import styles from "./NavBar.module.scss";
import Link from "next/link";
import NavBarTab from "@elements/NavBarTab/NavBarTab";
import Image from "next/image";

export default function NavBar() {
    return (
        <>
        
            <div className={styles.container}>
                
                <div className={styles.leftNav}>
                    <Link href="">
                        <Image 
                            src="public/assets/ltds-logo.png"
                            width={120}
                            height={40}
                        />
                    </Link>
                    
                    <Link href="/">
                        <a className={styles.navItem}>UP2HF</a>
                    </Link>
                </div>

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