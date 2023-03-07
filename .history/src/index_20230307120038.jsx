import HomePage from "@templates/HomePage/HomePage";
import Default from "@layouts/Default/Default";

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