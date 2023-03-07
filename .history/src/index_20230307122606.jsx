import HomePage from "./components/templates/HomePage/HomePage";

export default function App() {
  return (
    <>
      <HomePage />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}