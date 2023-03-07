import HomePage from "../templatesHomePage/HomePage";
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