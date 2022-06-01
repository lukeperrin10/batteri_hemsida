import React from 'react'
import getAllCategories from '../../lib/get-all-categories'
import getPageData from '../../lib/get-page-data'
import getCategoryBySlug from '../../lib/get-category-slug'
import Card from '../../components/Card'
import CategoryHero from '../../components/CategoryHero'

const CategoryPage = ({ category }) => {
  return (
    <>
      <CategoryHero data={category}/>
      {category.products?.map((product, index) => {
        const course_data = {
          slug: product.slug,
          gradientColor: product.gradientColor,
          isWide: product.isWide,
          image: product.images[0],
          wideImage: product.wideImage[0],
          name: product.name,
          logo: product.logo,
          description: product.description,
        }
        return <Card data={course_data} key={index} />
      })}
    </>
  )
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
