import FooterBarLogos from "@elements/FooterBarLogos/FooterBarLogos"
import FooterBarBottom from "@modules/FooterBarBottom/FooterBarBottom"
import FooterBarMenu from "@modules/FooterBarMenu/FooterBarMenu"
import styles from "./FooterBar.module.scss"

export default function FooterBar() {
    return (
        <> 
            <div className={styles.container}>
                <img src="/assets/images/layered-peaks-haikei.svg" alt="Footer Bar"/>
                <div className={styles.footer}>
                    <FooterBarLogos/>
                    
                </div>
                <FooterBarMenu
                        menuName="BROWSE"
                    />
                <FooterBarBottom/>
            </div>
            
        </>
    )
}