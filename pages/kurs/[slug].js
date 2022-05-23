import { useEffect, useState } from 'react'
import getAllProducts from '../../lib/get-all-product'
import getProductBySlug from '../../lib/get-product-slug'
import HopHelper from '../../modules/helper'

const Product = ({ product }) => {
  let coach = product.courseLeaders.map((variant, index) => {
    return (
      <div key={index}>
        <h3>{variant.name}</h3>
        <img src={variant.courseLeaderImage.url} alt={variant.name} />
      </div>
    )
  })

  return (
    <div>
      <h1>{product.name}</h1>
      <p>
        {product.description}
        <br />
        {product.price} SEK
        <br />
        Course Start dates:{' '}
        <select>{HopHelper.addCourseDuration(product)}</select>
        <br />
      </p>
      {coach}
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
