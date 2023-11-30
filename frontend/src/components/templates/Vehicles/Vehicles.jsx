import React from 'react';
import Link from 'next/link';
import styles from './Vehicles.module.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Vehicles({ cars }) {

  if (!cars) return <h1>Loading...</h1>;

  return (
    <>
      <div className={styles.container} tabIndex="0">
          <div className={styles.photo} ></div>
          <div className={styles.shutter} style={{ '--flaps': '6' }}>
            <div className={styles.flap} style={{ '--i': '0' }}></div>
            <div className={styles.flap} style={{ '--i': '1' }}></div>
            <div className={styles.flap} style={{ '--i': '2' }}></div>
            <div className={styles.flap} style={{ '--i': '3' }}></div>
            <div className={styles.flap} style={{ '--i': '4' }}></div>
            <div className={styles.flap} style={{ '--i': '5' }}></div>
          </div>
      </div>
      <div className={styles.mainContainer}>  
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