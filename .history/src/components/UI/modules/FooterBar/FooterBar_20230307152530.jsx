import styles from "./FooterBar.module.scss"

export default function FooterBar() {
    return (
        <> 
            <div className={styles.container}>
                <img src="/assets/images/layered-peaks-haikei.svg" alt="Footer Bar"/>
                <div className={styles.footer}>    
                </div>
            </div>
            
        </>
    )
}