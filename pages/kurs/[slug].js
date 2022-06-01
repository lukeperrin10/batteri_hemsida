import Image from 'next/image'
import { useEffect, useState } from 'react'
import CourseHero from '../../components/CourseHero'
import getAllProducts from '../../lib/get-all-product'
import getProductBySlug from '../../lib/get-product-slug'
import HopHelper from '../../modules/helper'

const Product = ({ product }) => {
  let coach = product.courseLeaders.map((variant, index) => {
    return (
      <div key={index}>
        <h3>{variant.name}</h3>
        <Image src={variant.courseLeaderImage.url} alt={variant.name} height={280} width={280}/>
      </div>
    )
  })

  return (
    <div>
      <CourseHero data={product} />
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
