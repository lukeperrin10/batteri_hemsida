import React from 'react'
import Link from 'next/link'
import getAllCategories from '../../lib/get-all-categories'
import getPageData from '../../lib/get-page-data'
import getCategoryBySlug from '../../lib/get-category-slug'
import Card from '../../components/Card'

const CategoryPage = ({ category }) => {
  let product_data = category.products?.map((product) => product)
  let image = category.products?.[0].images[0]
  let wideImage = category.products?.[0].wideImage
  let logo = category.products?.[0].logo
  const data = {
    slug: product_data[0].slug,
    gradientColor: product_data[0].gradientColor,
    isWide: product_data[0].isWide,
    image: image,
    wideImage: wideImage,
    name: product_data[0].name,
    logo: logo,
    description: product_data[0].description,
  }

  return <Card data={data} />
}

export async function getStaticPaths() {
  let paths = []

  const { categories } = await getAllCategories()

  paths = [
    ...paths,
    ...categories.map((category) => ({
      params: { slug: category.slug },
    })),
  ]

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const pageData = await getPageData()
  const { category } = await getCategoryBySlug({
    slug: params.slug,
  })

  return {
    props: {
      category,
      ...pageData,
    },
  }
}

export default CategoryPage
