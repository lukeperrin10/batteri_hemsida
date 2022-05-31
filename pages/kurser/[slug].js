import React from 'react'
import Link from 'next/link'
import getAllCategories from '../../lib/get-all-categories'
import getPageData from '../../lib/get-page-data'
import getCategoryBySlug from '../../lib/get-category-slug'
import Card from '../../components/Card'

const CategoryPage = ({ category }) => {
  return category.products?.map((product, index) => {
    const course_image = product.images[0]
    const course_wideImage = product.wideImage[0]

    const course_data = {
      slug: product.slug,
      gradientColor: product.gradientColor,
      isWide: product.isWide,
      image: course_image,
      wideImage: course_wideImage,
      name: product.name,
      logo: product.logo,
      description: product.description,
    }
    return <Card data={course_data} key={index} />
  })
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
