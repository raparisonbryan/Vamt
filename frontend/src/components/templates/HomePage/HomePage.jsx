import styles from "./HomePage.module.scss";
import { FaRegHeart, FaSlidersH } from 'react-icons/fa';
import { MdSettings } from 'react-icons/md';
import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/router';

export default function HomePage( {cars} ) {
    const [searchTerm, setSearchTerm] = useState('');
    const router = useRouter();

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        router.push(`/search?term=${encodeURIComponent(searchTerm)}`);
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.background}>
                    <div className={styles.left}>
                        <h1>Location de voiture à prix réduit</h1>
                        <p>Roulez avec style et simplicité grâce à notre service de location</p>
                        <div className={styles.buttonDiv}>
                            <button className={styles.button}>Réserver</button>
                            <button className={styles.button}>Nos véhicules</button>   
                        </div> 
                        <div>
                            <form onSubmit={handleSearchSubmit}>
                            <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Rechercher une voiture par nom" />
                            <button type="submit">Rechercher</button>
                            </form>
                        </div>
                    </div>

                    <div className={styles.right}>
                        <img className={styles.imageHead} src="/assets/v8-accueil.png" alt="image"></img>
                    </div>
                </div>


                <div className={styles.benefice}>
                    <div className={styles.beneficeTitle}>
                        <h2>Les avantages de notre service</h2>
                    </div>
                    <div className={styles.beneficeDiv}>
                        <div className={styles.beneficeCard}>
                                <FaRegHeart size={60}/>
                            <h3>Convivialité</h3>
                            <p>Notre service de location de voiture est convivial et vous permet de rouler en toute sécurité</p>
                        </div>
                        <div className={styles.beneficeCard}>
                                <MdSettings size={60}/>
                            <h3>Efficacité</h3>
                            <p>Notre service de location de voiture est efficace et vous permet de rouler en toute sécurité</p>
                        </div>
                        <div className={styles.beneficeCard}>
                                <FaSlidersH size={60}/>
                            <h3>Diversité des services</h3>
                            <p>Notre service de location de voiture est diversifié et vous permet de rouler en toute sécurité</p>   
                        </div>
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
                        <Link className={styles.cars} href="/vehicles">
                            <h3 className={styles.category}>Citadine</h3>
                            <div className={styles.imageDiv1}>
                            </div>
                            <p className={styles.description}>Petite voiture économique</p>
                        </Link>
                            
                    
                        <Link className={styles.cars} href="/vehicles">
                            <h3 className={styles.category}>SUV</h3>
                            <div className={styles.imageDiv2}>
                            </div>
                            <p className={styles.description}>Grande voiture confortable</p>
                        </Link>
                    </div>
                    <div className={styles.CarChoice}>
                        <Link className={styles.cars} href="/vehicles">
                            <h3 className={styles.category}>Pick-up</h3>
                            <div className={styles.imageDiv3}>   
                            </div>                            
                            <p className={styles.description}>Utilitaire et confortable</p>
                        </Link>
                        <Link className={styles.cars} href="/vehicles">
                            <h3 className={styles.category}>Bus</h3>
                            <div className={styles.imageDiv4}>
                            </div>
                            <p className={styles.description}>Transport de personnel</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

