import { useRouter } from 'next/router';
import Search from '../../src/components/templates/SearchModule/Search';
import Default from '../../src/components/UI/layouts/Default';

export default function SearchPage({ cars }) {
  const router = useRouter();
  const { term } = router.query;

  return (
    <Default>
        <Search searchTerm={term} cars={cars} />
    </Default>
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