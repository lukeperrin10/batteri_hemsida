import Link from 'next/link';
import { useRouter } from 'next/router';

const Card = ({ data }) => {
  const router = useRouter();

  switch (router.route) {
    case '/event':
      return (
        <Link href={`/event/${data.slug}`} passHref>
          <div className='card'>
            <h2>{data.name}</h2>
          </div>
        </Link>
      );

    default:
      return (
        <Link href={`/kurser/${data.slug}`} passHref>
          <div className='product-card'>
            <h2>{data.name}</h2>
          </div>
        </Link>
      );
  }
};

export default Card;
