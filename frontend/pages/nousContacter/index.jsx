import Default from "../../src/components/UI/layouts/Default.jsx";
import NousContacter from "../../src/components/templates/Contact/NousContacter.jsx";

export default function nousContacter() {
  return (
    <>
      <Default>
        <NousContacter />
      </Default>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {} 
  };
}