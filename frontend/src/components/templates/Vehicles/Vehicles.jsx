import React from 'react';
import Link from 'next/link';
import styles from './Vehicles.module.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Vehicles({ cars }) {

  if (!cars) return <h1>Loading...</h1>;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.heroText}>
            <p>La route vous attend, choisissez votre compagnion</p>
          </div>
        </div>
        <div className={styles.title}>
          <h1>Nos véhicules</h1>
        </div>
        <div className={styles.slider}>
          <Carousel  autoPlay axis="horizontal" interval="6000" infiniteLoop>
            {cars.map(car => (
              <div key={car._id}>
                <div className={styles.carCard}>
                  <div className={styles.imageDiv}>
                    <img  className={styles.image} src={car.imageUrl} alt="Car Image" />
                  </div>
                  <h2 className={styles.name}>{car.name}</h2>
                  <Link className={styles.link} href={`/vehicles/${car._id}`}>
                    <p>Voir la voiture</p>
                  </Link>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
}