import React from 'react';
import Link from 'next/link';
import styles from './Vehicles.module.scss';

export default function Vehicles({ cars }) {

  if (!cars) return <h1>Loading...</h1>;

  return (
    <>
      <div className={styles.container}>
        <div>
          <h1>Nos véhicules</h1>
        </div>
        {cars.map(car => (
          <div key={car._id}>
            <h2>{car.name}</h2>
            <p>{car.description}</p>
            <Link href={`/vehicles/${car._id}`}>
              <p>Voir la voiture</p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}