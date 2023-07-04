import About from "../../src/components/templates/About/About.jsx";
import Default from "../../src/components/UI/layouts/Default";

export default function about() {
  return (
    <>
      <Default>
        <About />
      </Default>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {} 
  };
}