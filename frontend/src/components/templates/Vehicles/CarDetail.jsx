import Link from 'next/link';
import { useRouter } from 'next/router';

export default function CarDetail({ car }) {
    const router = useRouter();

    const handleContactClick = () => {
        router.push(`/contact?carId=${car._id}&carName=${encodeURIComponent(car.name)}`);
    };
    return (
      <div>
        <h2>{car.name}</h2>
        <p>{car.description}</p>
        <button onClick={handleContactClick}>Contactez-nous</button>
      </div>
    );
  }
  