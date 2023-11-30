import HomePage from "../src/components/templates/HomePage/HomePage";
import AccueilLayout from "../src/components/UI/layouts/AccueilLayout";
export default function Home({ cars }) {

  return (
    <>
      <AccueilLayout>
        <HomePage cars={cars} />
      </AccueilLayout>
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