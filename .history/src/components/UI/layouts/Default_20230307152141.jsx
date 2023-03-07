import styles from "./Default.module.scss";
import NavBar from '../modules/NavBar/NavBar';

export default function Default({children}) {
    return (
        <>      
            <div className={styles.default}>
                <div className={styles.content}>{children}</div>
            </div>  
        </>
    )
}