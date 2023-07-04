import { useRouter } from 'next/router';

export default function Contact() {
  const router = useRouter();
  const { carId, carName } = router.query;

  return (
    <div>
      <h1>Contactez-nous</h1>
      <p>Pour toute demande de renseignements sur {carName}, veuillez nous contacter :</p>

      <h2>Informations sur la voiture :</h2>
      <ul>
        <li>Nom du véhicule : {carName}</li>
        {/* Ajoutez les autres informations de la voiture */}
      </ul>

      <h2>Coordonnées de contact :</h2>
      <p>Numéro de téléphone : 123-456-7890</p>
      <p>Adresse e-mail : contact@example.com</p>
    </div>
  );
}
