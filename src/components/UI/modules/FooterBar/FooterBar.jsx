import styles from "./FooterBar.module.scss"
import Image from "next/image"
import Link from "next/link"
import NavBarTab from "../../elements/NavBar/NavBarTab";
import NavLinks from "../NavBar/NavLinks";

export default function FooterBar() {
    return (
        <> 
            <div className={styles.container}>
                <div className={styles.footer}>
                    <div className={styles.upFooter}>    
                        <div className={styles.leftFooter}> 
                        <Link href="/" legacyBehavior>
                            <Image 
                                src="/assets/ltds-logo.png"
                                width={240}
                                height={100}
                            />
                        </Link>
                        </div>
                        <div className={styles.rightFooter}> 
                            <NavLinks/> 
                        </div>
                    </div>

                    <div className={styles.downFooter}>
                        <p className={styles.droits}>Tous droits réservés © Vam't 2023</p>
                    </div>
                </div>
            </div>
            
        </>
    )
}