import styles from "./HomePage.module.scss";

export default function HomePage() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.background}>
                    <div className={styles.left}>
                        <img className={styles.imageHead} src="/assets/accueil.jpeg" alt="image"></img>
                    </div>
                    <div className={styles.right}>
                        <img src="/assets/ltds-logo.png" alt="logo"></img>
                        <h1>Location de voiture</h1>
                        <p>Location de voiture à prix réduit</p>          
                    </div>
                </div>
                <div className={styles.wave}>
                    <img src="/assets/wave-cropped.svg" alt="logo"></img>
                </div>
                <div className={styles.carDiv}>
                    <div className={styles.carTitle}>
                        <h2>Choisissez votre voiture</h2>
                    </div>
                    <div className={styles.CarChoice}>
                        <div className={styles.cars}>
                            <h3 className={styles.category}>Citadine</h3>
                            <div className={styles.imageDiv1}>
                            </div>
                            <p className={styles.description}>Petite voiture économique</p>
                        </div>
                        <div className={styles.cars}>
                            <h3 className={styles.category}>SUV</h3>
                            <div className={styles.imageDiv2}>
                            </div>
                            <p className={styles.description}>Grande voiture confortable</p>
                        </div>
                    </div>
                    <div className={styles.CarChoice}>
                        <div className={styles.cars}>
                            <h3 className={styles.category}>Pick-up</h3>
                            <div className={styles.imageDiv3}>
                              
                            </div>                            
                            <p className={styles.description}>Utilitaire et confortable</p>
                        </div>
                        <div className={styles.cars}>
                            <h3 className={styles.category}>Bus</h3>
                            <div className={styles.imageDiv4}>
                            </div>
                            <p className={styles.description}>Transport de personnel</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}