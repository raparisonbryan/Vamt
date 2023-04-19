import styles from "./Default.module.scss";
import NavBar from '../modules/NavBar/NavBar';
import FooterBar from '../modules/FooterBar/FooterBar';

export default function Default({children}) {
    return (
        <>      
            <div className={styles.default}>
                <NavBar/>
                <div className={styles.content}>{children}</div>
                <FooterBar/>
            </div>  
        </>
    )
}