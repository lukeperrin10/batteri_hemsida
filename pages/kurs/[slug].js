import getAllProducts from '../../lib/get-all-product'
import getProductBySlug from '../../lib/get-product-slug'

const Product = ({ product }) => {
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price} SEK</p>
    </div>
  )
}

export async function getStaticPaths() {
  let paths = []

  const { products } = await getAllProducts()
  paths = [
    ...paths,
    ...products.map((product) => ({
      params: { slug: product.slug },
    })),
  ]

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { product } = await getProductBySlug({ slug: params.slug })

  return {
    props: {
      product,
    },
  }
}

export default Product
