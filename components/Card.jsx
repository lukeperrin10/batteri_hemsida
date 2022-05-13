
import Link from 'next/link'

const Card = ({ category }) => {
  return (
    <Link href={`/kurser/${category.slug}`}  passHref>
      <div className='product-card'>
        <h2>{category.name}</h2>
      </div>
    </Link>
  )
}

export default Card
