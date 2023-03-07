import HomePage from "../UI/pages/HomePage/HomePage";
import Default from "../UI/layouts/Default/Default";

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