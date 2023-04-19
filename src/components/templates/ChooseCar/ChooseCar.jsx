import styles from "./ChooseCar.module.scss";
import Image from "next/image";

export default function ChooseCar() {
    return (
        <>
            <div className={styles.container}>
                <div class={styles.background}>
                    <div class={styles.caption}>
                        <h1>Location de voiture</h1>
                        <p>Location de voiture à prix réduit</p>
                    </div>
                </div>
                <div className={styles.carDiv}>
                    <div className={styles.carTitle}>
                        <h2>Choisissez votre voiture</h2>
                    </div>
                    <div className={styles.CarChoice}>
                        <div className={styles.cars}>
                            <h3 className={styles.category}>Citadine</h3>
                            <Image src="/../public/assets/cars/c_elysee.png" alt="Citadine" width={220} height={150} />
                            <p className={styles.description}>Petite voiture économique</p>
                        </div>
                        <div className={styles.cars}>
                            <h3 className={styles.category}>SUV</h3>
                            <Image src="/../public/assets/cars/v8.png" alt="SUV" width={220} height={160} />
                            <p className={styles.description}>Grande voiture confortable</p>
                        </div>
                    </div>
                    <div className={styles.CarChoice}>
                        <div className={styles.cars}>
                            <h3 className={styles.category}>Pick-up</h3>                            
                            <Image src="/../public/assets/cars/sportero.png" alt="Pick-up" width={230} height={150} />
                            <p className={styles.description}>Utilitaire et confortable</p>
                        </div>
                        <div className={styles.cars}>
                            <h3 className={styles.busCategory}>Bus</h3>
                            <Image src="/../public/assets/cars/county.png" alt="Citadine" width={200} height={200} />
                            <p className={styles.busDescription}>Transport de personnel</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}