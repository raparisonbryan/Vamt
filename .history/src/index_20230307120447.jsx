import HomePage from "../src/components/templates/HomePage/HomePage";
import Default from "../src/components/UI/layouts/Default/Default";

export default function App() {
  return (
    <>
      <Default>
        <HomePage/>
      </Default>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}