import NavBar from '../modules/NavBar/NavBar';
import FooterBarBlue from '../modules/FooterBar/FooterBarBlue';
import styles from "./Default.module.scss"

export default function Default({children}) {
    return (
        <>      
            <div className={styles.default}>
                <NavBar/>
                <div className={styles.content}>{children}</div>
                <FooterBarBlue/>
            </div>  
        </>
    )
}