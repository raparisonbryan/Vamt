import styles from "./NavBar.module.scss";
import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

export default function NavBar() {
    return <>
    
        <div className={styles.container}>
            <div className={styles.leftNav}>
                <Link href="/" legacyBehavior>
                    <img className={styles.logo} src="/assets/logo.png" alt="logo" />
                </Link>
            </div>

            <div className={styles.rightNav}>
                <Nav />
                <MobileNav />
            </div>
        </div>

    </>;
}


