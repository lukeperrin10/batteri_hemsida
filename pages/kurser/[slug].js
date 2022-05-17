import React from 'react'
import Link from 'next/link'
import getAllCategories from '../../lib/get-all-categories'
import getPageData from '../../lib/get-page-data'
import getCategoryBySlug from '../../lib/get-category-slug'

const CategoryPage = ({ category }) => {
  let courses = category.products.map((data, slug) => {
    return (
      <div key={slug}>
        <Link href={`/kurs/${data.slug}`} passHref>
          <h3>{data.name}</h3>
        
        </Link>
      </div>
    )
  })

  return (
    <div>
      <h1>{`${category.name}`}</h1>
      <div>{courses}</div>
    </div>
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
