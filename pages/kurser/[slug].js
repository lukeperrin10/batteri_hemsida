import React from 'react'
import Link from 'next/link'
import getAllCategories from '../../lib/get-all-categories'
import getPageData from '../../lib/get-page-data'
import getCategoryBySlug from '../../lib/get-category-slug'
import Card from '../../components/Card'

const CategoryPage = ({ category }) => {
  debugger
  return (
    <>
      {category.products?.map((data) => {
        return (
          <div>
            <Card
              data={data}
              image={data.images?.[0]}
              wideImage={data.wideImage?.[0]}
              logo={data.logo?.[0]}
            />
          </div>
        )
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
