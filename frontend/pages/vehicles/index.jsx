import Vehicles from "../../src/components/templates/Vehicles/Vehicles.jsx";
import Default from "../../src/components/UI/layouts/Default";

export default function vehicles( {cars} ) {
  return (
    <>
      <Default>
        <Vehicles cars={cars} />
      </Default>
    </>
  );
}

export const getStaticProps = async () => {
  const response = await fetch('http://localhost:3000/api/cars/');
  const cars = await response.json();

  return {
    props: {
      cars,
    },
  };
}
