import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './CarDetail.module.scss';

export default function CarDetail({ car }) {
    const router = useRouter();

    const handleContactClick = () => {
        router.push(`/contact?carId=${car._id}&carName=${encodeURIComponent(car.name)}`);
    };

    return (
      <>
        <div className={styles.container}>
          <div className={styles.title}>
            <h2>{car.name}</h2>
          </div>
          <div className={styles.carDetail}>
            <div className={styles.imageDiv}>
              <img  className={styles.image} src={car.imageUrl} alt="Car Image" />
            </div>
            <div className={styles.textDiv}>
              <p className={styles.name}>{car.category}</p>
              <p className={styles.name}>{car.description}</p>
              <p className={styles.name}>prix: {car.price} Ar</p>
              <button className={styles.link} onClick={handleContactClick}>Contactez-nous</button>
            </div>
          </div>
        </div>
      </>  
    );
  }
  