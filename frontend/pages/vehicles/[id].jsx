import CarDetail from "../../src/components/templates/Vehicles/CarDetail.jsx";
import Default from "../../src/components/UI/layouts/Default";

export default function vehicles( {car} ) {
    return (
      <>
        <Default>
          <CarDetail car={car} />
        </Default>
      </>
    );
  }
  

export async function getStaticPaths() {
    // Récupérer les données des voitures pour générer les chemins
    const response = await fetch('http://localhost:3000/api/cars');
    const cars = await response.json();
  
    // Générer un tableau d'objets de chemin pour chaque voiture
    const paths = cars.map((car) => ({
      params: { id: car._id },
    }));
  
    return {
      paths,
      fallback: false,
    };
  }
  
export async function getStaticProps({ params }) {
    const { id } = params;
  
    // Récupérer les données spécifiques de la voiture en utilisant l'ID
    const response = await fetch(`http://localhost:3000/api/cars/${id}`);
    const car = await response.json();
  
    return {
      props: {
        car,
      },
    };
  }
  